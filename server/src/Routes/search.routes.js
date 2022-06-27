const express = require('express');
const { param, validationResult } = require("express-validator");
const searchController = require('../Controllers/Search.controller');
const searchRouter = express.Router();


searchRouter.get('/:value', [param('value').notEmpty()], async (req, res, next) => {
    try {
        validationResult(req).throw();
        const resp = await searchController.getCards(req.params);
        res.status(200).send(resp);
    } catch (err) {
        console.log('coming ', err);
        next(err);
    }
});

module.exports = searchRouter;