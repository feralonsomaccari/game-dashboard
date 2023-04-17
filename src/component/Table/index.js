import styles from './Table.module.css'
import Input from '../Input'
import Button from '../Button'

const Table = ({ headers, children, actions = true, filterHandler, addElementHandler, nextPageHandler, prevPageHandler, page = 0, range = 0, extraProps }) => {

    if (!headers) return null;

    return (
        <div className={styles.tableContainer}>
            <div className={styles.toolsContainer}>
                <Input placeholder='Filter...' onChangeHandler={filterHandler} />
                <Button text="Add +" clickHandler={addElementHandler} />
            </div>
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

            {range > 0 && (
                <div className={styles.footer}>
                    <Button text="Prev" clickHandler={prevPageHandler} />
                    <span>Page {page} of {range}</span>
                    <Button text="Next" clickHandler={nextPageHandler} />
                </div>
            )}
        </div>

    )
}

export default Table