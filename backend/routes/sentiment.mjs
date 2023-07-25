import { pipeline } from '@xenova/transformers'
import express from "express";
const router = express.Router();

router.post("/getSentiment", async (req, res) => {
    const {story} = req.body
    let classifier =  await pipeline('sentiment-analysis');
    let result =  await classifier(story);
    res.send(result)
})

module.exports = router;
// export const sentimentAnalysis = async(req, res) => {
//     const {story} = req.body
//     let classifier =  await pipeline('sentiment-analysis');
//     let result =  await classifier(story);
//     return result
// }
