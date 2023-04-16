import styles from './Table.module.css'

const Table = ({ headers, children }) => {

    return (
        <table className={styles.table}>
            <thead className={styles.tableHead}>
                <tr>
                    {headers.map((header, index) => <th key={index}>{header}</th>)}
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {children}
            </tbody>
        </table>
    )
}

export default Table