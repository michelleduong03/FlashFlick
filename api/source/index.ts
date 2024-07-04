import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    return res.json({ ok: true })
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});
