import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CardSearch from '../CardSearch/CardSearch';
import ReactPaginate from 'react-paginate';
import CardDetails from '../CardDetail/CardDetails'
import './Search.css';
import { CardContext } from '../../../store/card-context';


const Search = () => {


    //---------using context api for state management-----------
    const { cards, setCards } = useContext(CardContext);
    const [filteredCards, setFilteredCards] = useState([]);
    const [currentCards, setCurrentCards] = useState([]);
    const [searchByName, setSearchByName] = useState("");
    const [pageCount, setPageCount] = useState(0);
    const [itemsOffset, setItemsOffset] = useState(0);
    const cardsPerPage = 16;

    const filterCards = (name) => {
        name ? setSearchByName(name) : setSearchByName("");
    };

    //------------filtering cards and setting the filtered cards state whenever the cards state changes---------
    useEffect(() => {
        if (cards.length) {
            let nameValue = searchByName.toLowerCase().trim();
            if (nameValue) {
                const filteredCards = cards.filter((c) => {
                    return c.name.toLowerCase().includes(nameValue);
                });
                setFilteredCards(filteredCards);
            }
        } else {
            setFilteredCards([]);
        }

    }, [cards]);


    useEffect(() => {
        if (searchByName) {
            sendGetRequest();
        } else {
            setFilteredCards([]);
        }
    }, [searchByName]);

    //-----------using axios to fetch the api------------
    const sendGetRequest = async () => {
        try {
            const response = await axios.get(
                process.env.REACT_APP_API_URL + `/search/${searchByName}`
            );
            setCards(response.data.data);
        } catch (err) {
            console.log(err.response.data.status);
        }
    };

    //----------function to handle pagination---------
    useEffect(() => {
        const endOffset = itemsOffset + cardsPerPage;
        setCurrentCards(filteredCards.slice(itemsOffset, endOffset));
        setPageCount(Math.ceil(filteredCards.length / cardsPerPage));
    }, [itemsOffset, cardsPerPage, filteredCards]);

    const handlePageClick = (event) => {
        const newOffSet = (event.selected * cardsPerPage) % filteredCards.length;
        setItemsOffset(newOffSet);
    }

    return (
        <div>
            <CardSearch onFilterCards={filterCards} />
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {currentCards.map((card) => <CardDetails card={card} key={card.id} />)}
            </div>
            <ReactPaginate
                breakLabel={"..."}
                previousLabel={'< Previous'}
                nextLabel={'Next >'}
                pageCount={pageCount}
                onPageChange={handlePageClick}
                pageRangeDisplayed={"8"}
                renderOnZeroPageCount={null}
                containerClassName={"pagination"}
                pageClassName={"page-num"}
                previousLinkClassName={"page-num"}
                nextLinkClassName={"page-num"}
                activeClassName={"active"}
            />
        </div>
    );
};

export default Search;