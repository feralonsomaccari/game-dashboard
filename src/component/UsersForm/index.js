import React from 'react'
import Input from '../Input'

const UsersMenu = ({ currentItem, setCurrentItem }) => {
    return (
        <>
            <label htmlFor="form-username" type="value">Username</label>
            <Input
                placeholder="Username"
                onChangeHandler={(e) => setCurrentItem(prevUser => ({ ...prevUser, username: e.target.value }))}
                extraProps={{
                    id: "form-username",
                    value: currentItem.username,
                    maxLength: 32
                }} />
            <label htmlFor="form-email">Email</label>
            <Input
                placeholder="Email"
                onChangeHandler={(e) => setCurrentItem(prevUser => ({ ...prevUser, email: e.target.value }))}
                extraProps={{
                    id: "form-email",
                    value: currentItem.email,
                    maxLength: 32,
                    type: "email",
                }}
            />
        </>
    )
}

export default UsersMenu