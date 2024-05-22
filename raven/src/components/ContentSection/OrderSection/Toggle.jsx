import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";

const Toggle = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeValue, setActiveValue] = useState('')
    const status = searchParams.get("tabs")
    useEffect(() => {
        if (status === null) setActiveValue('order-book')
        else setActiveValue(status)
    }, [])

    const onChange = (value) => setSearchParams(params => {
        setActiveValue(value)
        params.set("tabs", value);
        return params;
    })
    return (
        <div className="toggle__container">
            <div
                onClick={() => onChange("order-book")}
                className={`toggle__btn ${activeValue === "order-book" ? "active" : "inactive"}`}>
                Order Book
            </div>
            <div
                onClick={() => onChange("recent-trade")}
                className={`toggle__btn ${activeValue === "recent-trade" ? "active" : "inactive"}`}>
                Recent trades
            </div>
        </div>
    )
}

export default Toggle
