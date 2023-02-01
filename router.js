const express = require('express');
const router = express.Router();

const movies = [
    {
        id: 1,
        title: 'The Shawshank Redemption',
        year: 1994,
        rating: 9.2,
    },
    {
        id: 2,
        title: 'The Godfather',
        year: 1972,
        rating: 9.2,
    },
    {
        id: 3,
        title: 'The Godfather: Part II',
        year: 1974,
        rating: 9.0,

    },
    {
        id: 4,
        title: 'The Dark Knight',
        year: 2008,
        rating: 9.0,
    }
];

router.get('/', (req, res) => {
    res.status(200).send(JSON.stringify(movies));
});

module.exports = router;