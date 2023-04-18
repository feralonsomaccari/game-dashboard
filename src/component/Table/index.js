import styles from './Table.module.css'

const Table = ({ headers, children, sortHandler, extraProps }) => {

    return (
        <table className={styles.table} {...extraProps} border="0" cellSpacing="0" cellPadding="0" >
            <thead className={styles.tableHead}>
                <tr>
                    {Object.keys(headers).map((header, index) => <th key={index} scope="col" onClick={() => sortHandler(header)}>{headers[header]}</th>)}
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {children}
            </tbody>
        </table>
    )
}

export default Table