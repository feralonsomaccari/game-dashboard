import { v4 as uuidv4 } from 'uuid';

export const getUsers = async () => {
    const response = await fetch(`/api/user`)
        .then(data => data.json())
        .then(data => {
            return data
        })
    return response
}


export const createUser = async (newUser) => {
    newUser.id = uuidv4();
    const response = await fetch(`/api/user`, { method: "POST", body: JSON.stringify(newUser) })
        .then(data => data.json())
        .then(data => {
            return data

        })
    return response
}

export const updateUser = async (updatedUser) => {
    const response = await fetch(`/api/user`, { method: "PUT", body: JSON.stringify(updatedUser) })
        .then(data => data.json())
        .then(data => {
            return data
        })
    return response
}

export const deleteUser = async (userId) => {
    const response = await fetch(`/api/user/${userId}`, { method: "DELETE" })
        .then(data => data.json())
        .then(data => {
            return data
        })
    return response
}