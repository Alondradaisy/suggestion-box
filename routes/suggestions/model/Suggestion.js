const mongoose = require('mongoose');


const SuggestionSchema = new mongoose.Schema ({
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    suggestion: {
        type: String,
    },
    likes: {
        type: [0],
    },
    anonymous: {
        type: Boolean,
    },
    timeCreated: {
        type: Date.now,
    },
});

module.exports = mongoose.model('suggestion', SuggestionSchema);