import { setupWorker, rest } from "msw";
import usersDummyData from "./usersDummyData.json"
import gamesDummyData from "./gamesDummyData.json"

const handlers = [
    // Handles a Users request
    rest.get('/api/user', (req, res, ctx) => {
        return res(ctx.delay(1000), ctx.json(usersDummyData));
    }),
    rest.delete('/api/user/:id', (req, res, ctx) => {
        const indexToRemove = usersDummyData.data.findIndex(item => item.id === req.params.id);
        usersDummyData.data.splice(indexToRemove, 1);
        return res(ctx.json(usersDummyData));
    }),
    rest.post('/api/user', (req, res, ctx) => {
        const newUser = JSON.parse(req.body)
        usersDummyData.data.push(newUser);
        newUser.created_at = new Date();
        return res(ctx.json(usersDummyData));
    }),

    // Handles a Games request
    rest.get('/api/game', (req, res, ctx) => {
        return res(ctx.delay(2000), ctx.json(gamesDummyData));
    })
];

const worker = setupWorker(...handlers)

worker.start();