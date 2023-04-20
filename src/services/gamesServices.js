import { v4 as uuidv4 } from 'uuid';

export const getGames = async () => {
    const response = await fetch(`/api/game`)
        .then(data => data.json())
        .then(data => {
            return data
        })
    return response
}


export const createGame = async (newGame) => {
    newGame.id = uuidv4();
    const response = await fetch(`/api/game`, { method: "POST", body: JSON.stringify(newGame) })
        .then(data => data.json())
        .then(data => {
            return data

        })
    return response
}

export const updateGame = async (updatedGanewGame) => {
    const response = await fetch(`/api/game`, { method: "PUT", body: JSON.stringify(updatedGanewGame) })
        .then(data => data.json())
        .then(data => {
            return data
        })
    return response
}

export const deleteGame = async (gameId) => {
    const response = await fetch(`/api/game/${gameId}`, { method: "DELETE" })
        .then(data => data.json())
        .then(data => {
            return data
        })
    return response
}