import styles from './Table.module.css'

const Table = ({ headers, children, extraProps }) => {

    if (!headers) return null;

    return (
        <table className={styles.table} {...extraProps}>
            <thead className={styles.tableHead}>
                <tr>
                    {headers.map((header, index) => <th key={index} scope="col">{header}</th>)}
                </tr>
            </thead>
            <tbody className={styles.tableBody}>
                {children}
            </tbody>
        </table>
    )
}

export default Table