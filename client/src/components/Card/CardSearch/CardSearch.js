import { useState, useMemo, useEffect } from 'react';
import debouce from "lodash.debounce";

//--------Search component for search by fulltext search query------
const CardSearch = ({ onFilterCards }) => {

    //-------state management for searchByName---------
    // eslint-disable-next-line no-unused-vars
    const [searchName, setSearchName] = useState('');

    const handleChangeName = (e) => {
        setSearchName(e.target.value);
        onFilterCards(e.target.value);
    };

    //-----useMemo to memoize a return value from debounce function---
    const debouncedResults = useMemo(() => {
        return debouce(handleChangeName, 500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //-----clean up any side effects from debounce----
    useEffect(() => {
        return () => {
            debouncedResults.cancel();
        };
    });

    return (
        <>
            <form className="flex justify-center">
                <div className="mb-3 xl:w-96 ">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full ">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd">
                                </path>
                            </svg>
                        </div>
                        <input type="text"
                            id="simple-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search"
                            onChange={debouncedResults}
                            required />
                    </div>
                </div>
            </form>
        </>
    );
};

export default CardSearch;