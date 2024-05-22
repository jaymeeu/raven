import React from 'react'
import DownTable from './DownTable'
import UpTable from './UpTable'
import { TbArrowNarrowUp, TbArrowNarrowDown } from "react-icons/tb";
import { useSearchParams } from 'react-router-dom';

const Index = () => {

    const [searchParams, _setSearchParams] = useSearchParams();
    const list = searchParams.get("list")

    return (
        <div>
            <div className="negative__tablehead">
                <div className="tablehead__cells">
                    <div className='tablehead__cell'>
                        <span>Price</span>
                        <span className='tablehead__cell--span'>(USDT)</span>
                    </div>
                    <div className='tablehead__cell'>
                        <span>Amount</span>
                        <span className='tablehead__cell--span'>(BTC)</span>
                    </div>
                    <div className='tablehead__cell'>
                        <span>Total</span>
                    </div>
                </div>
            </div>
            {
                list === "top" ?
                    <UpTable />
                    :
                    list === "bottom" ?
                        <DownTable />
                        :
                        <>
                            <DownTable />
                            <div className='table__prices'>
                                <span className='table__price'>36,641.20</span>
                                <TbArrowNarrowUp className='table__price' size={18} />
                                <span className='table__price--white'>36,641.20</span>
                            </div>
                            <UpTable />
                        </>
            }
        </div>
    )
}

export default Index
