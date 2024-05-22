import React from 'react'
import './style.css'
import TableCell from './TableCell'

const DownTable = () => {
    return (
        <div className='negative__table'>
            <div className='negative_tablebody'>
                <TableCell
                    type={"warm"}
                    percent={40}
                    price={"36920.12"}
                    amount={"0.758965"}
                    total={"28,020.98"}
                />
                <TableCell
                    type={"warm"}
                    percent={0}
                    price={"36920.12"}
                    amount={"0.758965"}
                    total={"28,020.98"}
                />
                <TableCell
                    type={"warm"}
                    percent={50}
                    price={"36920.12"}
                    amount={"0.758965"}
                    total={"28,020.98"}
                />
                <TableCell
                    type={"warm"}
                    percent={10}
                    price={"36920.12"}
                    amount={"0.758965"}
                    total={"28,020.98"}
                />
                <TableCell
                    type={"warm"}
                    percent={100}
                    price={"36920.12"}
                    amount={"0.758965"}
                    total={"28,020.98"}
                />
            </div>
        </div>
    )
}

export default DownTable
