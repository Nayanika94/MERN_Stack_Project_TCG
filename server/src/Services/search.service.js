const axios = require('axios');

const getCardsService = (searchValue) => {
    return new Promise((resolve, reject) => {
        axios.get(`${process.env.API_URL}/cards/search?q=${searchValue}`).then(({ data }) => {
            resolve({
                success: true,
                data: data.data.map(({ id, name, set_name, rarity, collector_number, image_uris }) => ({ id, name, set_name, rarity, collector_number, image_uris }))
            });
        }).catch(err => {
            reject({ success: false, error: "Improper Request!!" });
        })
    })
}

module.exports = { getCardsService };