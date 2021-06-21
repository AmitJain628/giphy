import express from 'express';
import core from 'express-serve-static-core';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.route('/').get((_: core.Request, res: core.Response) => {
    const reqPath = path.join(__dirname, '../');

    const rawdata = fs.readFileSync(`${reqPath}/books.json`);
    const jsonData = JSON.parse(rawdata.toString());

    res.send(jsonData);
});

router.route('/').post((req: core.Request, res: core.Response) => {
    const { body } = req;
    const book = {
        _id: Date.now(),
        title: body.title,
        shortDescription: body.shortDescription,
        thumbnailUrl: body.thumbnailUrl,
        author: body.author,
        pageCount: body.pageCount
    };

    const reqPath = path.join(__dirname, '../');
    try {
    const rawdata = fs.readFileSync(`${reqPath}/books.json`);

    const jsonData = JSON.parse(rawdata.toString());

    jsonData.push(book);

    const updatedData = JSON.stringify(jsonData, null, 2);
    fs.writeFileSync(`${reqPath}/books.json`, updatedData);

    res.sendStatus(200);
    } catch (err) {
        console.log('error here', err);
    }
});

export default router;
