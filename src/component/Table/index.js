import styles from './Table.module.css'
import Input from '../Input'

const Table = ({ headers, children, actions = true, filterHandler, extraProps }) => {

    if (!headers) return null;

    return (
        <div className={styles.tableContainer}>
            <Input placeholder='Filter...' onChange={filterHandler} />
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
        </div>

    )
}

export default Table