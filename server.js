
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let reviews = [];

app.get('/reviews', (req, res) => {
    res.json(reviews);
});

app.post('/reviews', (req, res) => {
    const { movie, rating, comment } = req.body;
    reviews.push({ movie, rating, comment });
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
