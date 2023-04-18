import { setupWorker, rest } from "msw";
import usersDummyData from "./usersDummyData.json"

const worker = setupWorker(
    rest.get('/api/user', (req, res, ctx) => {
        return res(ctx.json(usersDummyData));
    })
)

worker.start();