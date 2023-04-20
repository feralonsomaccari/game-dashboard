import { useState, useEffect } from "react";

const calculateRange = (data, rowsPerPage) => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    for (let i = 1; i <= num; i++) {
        range.push(i);
    }
    return range;
};

const sliceData = (data, page, rowsPerPage) => {
    if (!data || !data.length) return [];
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data, page, rowsPerPage) => {
    const [tableRange, setTableRange] = useState([]);
    const [slice, setSlice] = useState([]);

    const updatePaginationData = (newData) => {
        const range = calculateRange(newData, rowsPerPage);
        setTableRange([...range])

        const slice = sliceData(newData, page, rowsPerPage);
        setSlice([...slice]);
    }

    useEffect(() => {
        const range = calculateRange(data, rowsPerPage);
        setTableRange([...range]);

        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice]);
    }, [page, setTableRange, setSlice]);

    return [slice, updatePaginationData, tableRange];
};

export default useTable;