import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";

const ToggleAction = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeValue, setActiveValue] = useState('')
    const status = searchParams.get("transaction")
    useEffect(() => {
        if (status === null) setActiveValue('buy')
        else setActiveValue(status)
    }, [])

    const onChange = (value) => setSearchParams(params => {
        setActiveValue(value)
        params.set("transaction", value);
        return params;
    })
    return (
        <div className="toggle__actions">
            <div
                onClick={() => onChange("buy")}
                className={`toggle__action ${activeValue === "buy" ? "active active__buy" : "inactive"}`}>
                Buy
            </div>
            <div
                onClick={() => onChange("sell")}
                className={`toggle__action ${activeValue === "sell" ? "active active__sell" : "inactive"}`}>
                Sell
            </div>
        </div>
    )
}

export default ToggleAction
