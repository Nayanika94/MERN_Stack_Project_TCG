const searchService = require("../Services/search.service");

const getCards = async (params) => {
    return await searchService.getCardsService(params.value);
}

module.exports = { getCards };