import styles from './Table.module.css'

const Table = ({ headers, children, actions = true, filterHandler, extraProps }) => {

    if (!headers) return null;

    return (
        <>
            <input placeholder='Filter...' onChange={filterHandler}/>
            <table className={styles.table} {...extraProps}>
                <thead className={styles.tableHead}>
                    <tr>
                        {headers.map((header, index) => <th key={index} scope="col">{header}</th>)}
                        {actions && <th id="action-header" scope="col">Action</th>}
                    </tr>
                </thead>
                <tbody className={styles.tableBody}>
                    {children}
                </tbody>
            </table>
        </>

    )
}

export default Table