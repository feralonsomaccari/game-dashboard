import { setupWorker, rest } from "msw";
import usersDummyData from "./usersDummyData.json"
import gamesDummyData from "./gamesDummyData.json"

const handlers = [
    // Handles a Users request
    rest.get('/api/user', (req, res, ctx) => {
        return res(ctx.json(usersDummyData));
    }),
    // Handles a Games request
    rest.get('/api/game', (req, res, ctx) => {
        return res(ctx.json(gamesDummyData));
    })
];

const worker = setupWorker(...handlers)

worker.start();