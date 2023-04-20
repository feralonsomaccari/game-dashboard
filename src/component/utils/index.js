export const filterRows = (rows = [], searchValue = '') => {
    return rows.filter(row => {
        const values = Object.values(row).map(value => typeof value === 'string' ? value.toLowerCase() : "")
        return values.join(" ").match(new RegExp(searchValue.toLowerCase(), "g"))
    })
}

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-UK");
}  