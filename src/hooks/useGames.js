import { useState, useEffect } from "react";
import { getGames, createGame, updateGame, deleteGame } from "../services/gamesServices"

const useGames = () => {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const createGameHandler = async (game) => {
        try {
            const response = await createGame(game)
            setGames(response)
        } catch (error) {
            console.error(error)
            setError(error)
        }
    }
    const updateGameHandler = async (game) => {
        try {
            const response = await updateGame(game)
            setGames(response)
        } catch (error) {
            console.error(error)
            setError(error)
        }
    }
    const deleteGameHandler = async (game) => {
        try {
            const response = await deleteGame(game)
            setGames(response)
        } catch (error) {
            console.error(error)
            setError(error)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getGames();
                setGames(response)
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        }
        fetchData();
    }, [])

    return [games, createGameHandler, updateGameHandler, deleteGameHandler, loading, error];
};

export default useGames;
