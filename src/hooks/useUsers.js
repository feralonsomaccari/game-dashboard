import { useState, useEffect } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "../services/userServices"

const useUsers = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const createUserHandler = async (user) => {
        try {
            const response = await createUser(user)
            setUsers(response)
        } catch (error) {
            console.error(error)
            setError(error)
        }
    }
    const updateUserHandler = async (user) => {
        try {
            const response = await updateUser(user)
            setUsers(response)
        } catch (error) {
            console.error(error)
            setError(error)
        }
    }
    const deleteUserHandler = async (user) => {
        try {
            const response = await deleteUser(user)
            setUsers(response)
        } catch (error) {
            console.error(error)
            setError(error)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUsers();
                setUsers(response)
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        }
        fetchData();
    }, [])

    return [users, createUserHandler, updateUserHandler, deleteUserHandler, loading, error];
};

export default useUsers;
