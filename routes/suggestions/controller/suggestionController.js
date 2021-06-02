const express = require('express');
const { router } = require('../../../app');
const Router = express.Router();

const {
    getAllSuggestions, 
    getSingleSuggestion,
    createSuggestion,
    updateSuggestion,
    deleteSuggestion,
} = require('./suggestionController/controller');

router.get('/', function (req, res, next) {
    res.json({
        test: true,
    });
});

router.get('.')
