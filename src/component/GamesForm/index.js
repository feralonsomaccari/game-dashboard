import React from 'react'
import Input from '../Input'

const GamesMenu = ({ currentItem, setCurrentItem }) => {
    return (
        <>
            <label htmlFor="form-name" type="value">Name</label>
            <Input
                placeholder="Game Name"
                onChangeHandler={(e) => setCurrentItem(prevUser => ({ ...prevUser, name: e.target.value }))}
                extraProps={{
                    id: "form-name",
                    value: currentItem.name,
                    maxLength: 32
                }} />
            <label htmlFor="form-category">Category</label>
            <Input
                placeholder="Category"
                onChangeHandler={(e) => setCurrentItem(prevUser => ({ ...prevUser, category: e.target.value }))}
                extraProps={{
                    id: "form-category",
                    value: currentItem.category,
                    maxLength: 32,
                    type: "category",
                }}
            />
            <label htmlFor="form-developer">Developer</label>
            <Input
                placeholder="Developer"
                onChangeHandler={(e) => setCurrentItem(prevUser => ({ ...prevUser, developer: e.target.value }))}
                extraProps={{
                    id: "form-developer",
                    value: currentItem.developer,
                    maxLength: 32,
                    type: "developer",
                }}
            />
        </>
    )
}

export default GamesMenu