import { setupWorker, rest } from "msw";
import usersDummyData from "./dummyData/usersDummyData.json"
import gamesDummyData from "./dummyData/gamesDummyData.json"

const handlers = [
    // Handles a Users request
    rest.get('/api/user', (req, res, ctx) => { // Get users
        return res(ctx.delay(1000), ctx.json(usersDummyData));
    }),
    rest.delete('/api/user/:id', (req, res, ctx) => { // Delete User
        const indexToRemove = usersDummyData.data.findIndex(item => item.id === req.params.id);
        usersDummyData.data.splice(indexToRemove, 1);
        return res(ctx.json(usersDummyData));
    }),
    rest.post('/api/user', (req, res, ctx) => { // Add User
        const newUser = JSON.parse(req.body)
        usersDummyData.data.push(newUser);
        newUser.created_at = new Date();
        return res(ctx.json(usersDummyData));
    }),
    rest.put('/api/user', (req, res, ctx) => { // Update User
        const updateUser = JSON.parse(req.body)
        const userIndex = usersDummyData.data.findIndex(item => item.id === updateUser.id);
        usersDummyData.data[userIndex] = updateUser;
        return res(ctx.json(usersDummyData));
    }),

    // Handles a Games request
    rest.get('/api/game', (req, res, ctx) => {
        return res(ctx.delay(2000), ctx.json(gamesDummyData));
    }),
    rest.delete('/api/game/:id', (req, res, ctx) => { // Delete Games
        const indexToRemove = gamesDummyData.data.findIndex(item => item.id === req.params.id);
        gamesDummyData.data.splice(indexToRemove, 1);
        return res(ctx.json(gamesDummyData));
    }),
    rest.post('/api/game', (req, res, ctx) => { // Add Games
        const newGames = JSON.parse(req.body)
        gamesDummyData.data.push(newGames);
        newGames.created_at = new Date();
        return res(ctx.json(gamesDummyData));
    }),
    rest.put('/api/game', (req, res, ctx) => { // Update Games
        const updateGames = JSON.parse(req.body)
        const gameIndex = gamesDummyData.data.findIndex(item => item.id === updateGames.id);
        gamesDummyData.data[gameIndex] = updateGames;
        return res(ctx.json(gamesDummyData));
    }),
];

const worker = setupWorker(...handlers)

worker.start();