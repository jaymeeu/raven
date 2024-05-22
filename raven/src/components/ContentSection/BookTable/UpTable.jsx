import React from 'react'
import './style.css'
import TableCell from './TableCell'

const UpTable = () => {
    return (
        <div className='negative__table'>
            <div className='negative_tablebody'>
                <TableCell
                    type={"cold"}
                    percent={40}
                    price={"36920.12"}
                    amount={"0.758965"}
                    total={"28,020.98"}
                />
                <TableCell
                    type={"cold"}
                    percent={0}
                    price={"36920.12"}
                    amount={"0.758965"}
                    total={"28,020.98"}
                />
                <TableCell
                    type={"cold"}
                    percent={50}
                    price={"36920.12"}
                    amount={"0.758965"}
                    total={"28,020.98"}
                />
                <TableCell
                    type={"cold"}
                    percent={10}
                    price={"36920.12"}
                    amount={"0.758965"}
                    total={"28,020.98"}
                />
                <TableCell
                    type={"cold"}
                    percent={100}
                    price={"36920.12"}
                    amount={"0.758965"}
                    total={"28,020.98"}
                />
            </div>
        </div>
    )
}

export default UpTable
