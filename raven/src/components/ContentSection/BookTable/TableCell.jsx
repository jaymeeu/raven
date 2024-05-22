import React from 'react'

const TableCell = ({type, percent, price, amount, total}) => {
    return (
        <div className="table__cells" style={{ background: `linear-gradient(to right,transparent ${100-percent}%, var(--${type}-bg-color) ${percent}%)` }}>
            <div className={`table__cell--${type}`}>
                <span>{price}</span>
            </div>
            <div className='table__cell--amount'>
                <span>{amount}</span>
            </div>
            <div className='table__cell--amount'>
                <span>{total}</span>
            </div>
        </div>
    )
}

export default TableCell
