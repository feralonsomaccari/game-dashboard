import { useState, useEffect, useLayoutEffect, useCallback, useRef } from 'react'
import styles from './TableContainer.module.css'
import Card from '../Card'
import useTable from "../../hooks/useTablePagination";
import { filterRows, formatDate } from "../utils"
import tableStyles from "../Table/Table.module.css";
import Table from "../Table"
import Input from '../Input'
import Button from '../Button'
import LoadingSpinner from '../LoadingSpinner'

const NO_DATA = "No data has been found."

const TableContainer = ({ title, data, headers = {}, addElementHandler, tableHeight, setTableHeight, deleteHandler, updateHandler, loading, type }) => {

    const [page, setPage] = useState(1);
    const [paginationData, updatePaginationData, range] = useTable(data, page, 4);
    const ref = useRef(null)

    // Ensures a consistent Table height 
    useLayoutEffect(() => {
        if (!ref) return;
        if (!paginationData || !paginationData.length) return;
        if (tableHeight === 0) return setTableHeight(ref.current.clientHeight)
        ref.current.style.minHeight = `${tableHeight}px`
    }, [paginationData])

    useEffect(() => {
        updatePaginationData(data, 4)
    }, [data])

    const filterHandler = (event) => {
        updatePaginationData(filterRows(data, event.target.value))
    }

    const nextPageHandler = useCallback(() => {
        if (page >= range.length) return;
        setPage(page + 1);
    }, [page, range])

    const prevPageHandler = useCallback(() => {
        if (page <= 1) return;
        setPage(page - 1);
    }, [page])

    const sortByColumn = (column) => {
        const sorted = structuredClone(paginationData);
        sorted.sort((a, b) => a[column].localeCompare(b[column]))
        updatePaginationData(sorted)
    }

    const renderTableContent = () => {
        return paginationData.map((row) => {
            return (
                <tr key={row.id}>
                    {Object.keys(headers).map((key) => {
                        return <td key={key} data-th={headers[key]} className={key === 'username' ? tableStyles.username : ''}>
                            {key === 'created_at' ? formatDate(row[key]) : row[key]}
                        </td>
                    })}
                    <td data-th='Actions' id="action-header" className={tableStyles.actionsContainer}>
                        <button className={`${tableStyles.icon} ${tableStyles.edit}`} onClick={() => updateHandler(type, row)} />
                        <button className={`${tableStyles.icon} ${tableStyles.delete}`} onClick={() => deleteHandler(type, row)} />
                    </td>
                </tr>
            )
        })
    }

    return (
        <Card title={title}>
            <div className={styles.tableContainer} ref={ref}>
                {loading ? (
                    <div className={styles.loaderContainer}>
                        <LoadingSpinner />
                    </div>
                ) : (
                    <>
                        <div className={styles.toolsContainer}>
                            <Input placeholder='Filter...' onChangeHandler={filterHandler} ariaLabel="filter table data" />
                            <Button text="Add +" clickHandler={() => addElementHandler(type)} extraProps={{ 'data-testid': 'add-item' }} />
                        </div>
                        <Table headers={headers}
                            filterHandler={filterHandler}
                            nextPageHandler={nextPageHandler}
                            prevPageHandler={prevPageHandler}
                            sortHandler={sortByColumn}
                        >
                            {paginationData.length
                                ? renderTableContent(paginationData)
                                : <tr><td className={tableStyles.noData} colSpan={Object.keys(headers).length}>{NO_DATA}</td></tr>}
                        </Table>
                    </>
                )}
            </div>
            {range.length > 0 && (
                <div className={styles.footer}>
                    <Button text="Prev" clickHandler={prevPageHandler} disabled={page <= 1} />
                    <span>Page {page} of {range.length}</span>
                    <Button text="Next" clickHandler={nextPageHandler} disabled={page >= range.length} />
                </div>
            )}
        </Card>
    )
}

export default TableContainer
