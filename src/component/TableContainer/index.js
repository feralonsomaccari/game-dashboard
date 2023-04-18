import { useState, useEffect, useLayoutEffect, useCallback, useRef } from 'react'
import styles from './TableContainer.module.css'
import Card from '../Card'
import useTable from "../../hooks/useTablePagination";
import { filterRows } from "../utils"
import tableStyles from "../Table/Table.module.css";
import Table from "../Table"
import Input from '../Input'
import Button from '../Button'

const NO_DATA = "No data has been found"

const TableContainer = ({ data, originalData, headers, setData, addElementHandler, tableHeight, setTableHeight }) => {

    const [page, setPage] = useState(1);
    const [paginationData, updatePaginationData, range] = useTable(data, page, 4);

    const ref = useRef()

    // Ensures a consistent Table height 
    useLayoutEffect(() => {
        if (!paginationData || !paginationData.length) return;
        if (tableHeight === 0) return setTableHeight(ref.current.clientHeight)
        ref.current.style.minHeight = `${tableHeight}px`
    }, [paginationData])

    useEffect(() => {
        updatePaginationData(data, 4)
    }, [data])

    const filterHandler = (event) => {
        setData(filterRows(originalData, event.target.value))
    }

    const nextPageHandler = useCallback(() => {
        if (page >= range.length) return;
        setPage(page + 1);
    }, [page, range])

    const prevPageHandler = useCallback(() => {
        if (page <= 1) return;
        setPage(page - 1);
    }, [page, range])

    const sortByColumn = (column) => {
        const sorted = structuredClone(data);
        sorted.sort((a, b) => a[column].localeCompare(b[column]))
        setData(sorted)
    }

    const renderTableContent = () => {
        return paginationData.map((row) => {
            return (
                <tr key={row.id}>
                    {Object.keys(headers).map((key) => {
                        return <td key={key} data-th={headers[key]} className={key === 'username' ? tableStyles.username : ''}>{row[key]}</td>
                    })}
                    {/* <td data-th='Actions' id="action-header" className={tableStyles.actionsContainer}>
                        <button className={`${tableStyles.icon} ${tableStyles.edit}`} />
                        <button className={`${tableStyles.icon} ${tableStyles.delete}`} />
                    </td> */}
                </tr>
            )
        })
    }

    return (
        <>
            <Card title="Registered Users">
                <div className={styles.tableContainer} ref={ref}>
                    <div className={styles.toolsContainer}>
                        <Input placeholder='Filter...' onChangeHandler={filterHandler} />
                        <Button text="Add +" clickHandler={addElementHandler} />
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
                </div>
                {range.length > 0 && (
                    <div className={styles.footer}>
                        <Button text="Prev" clickHandler={prevPageHandler} disabled={page <= 1} />
                        <span>Page {page} of {range.length}</span>
                        <Button text="Next" clickHandler={nextPageHandler} disabled={page >= range.length} />
                    </div>
                )}
            </Card>
        </>
    )
}

export default TableContainer
