import express from 'express'
import dotenv from 'dotenv';
import * as OpenAI from './open-ai';

dotenv.config();

const app = express();
const port = process.env.PORT;


//Print basics of Open AI on console.

app.get('/test', async (req, res) => {
    const message = await OpenAI.BasicOpenAI();
    res.send(message);
})





app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});