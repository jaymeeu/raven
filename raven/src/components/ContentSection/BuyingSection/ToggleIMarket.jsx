import React, { useEffect, useState } from 'react'
import './style.css'
import { useSearchParams } from "react-router-dom";


const ToggleIMarket = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeValue, setActiveValue] = useState('')
    const status = searchParams.get("market")
    useEffect(() => {
        if (status === null) setActiveValue('limit')
        else setActiveValue(status)
    }, [])

    const onChange = (value) => setSearchParams(params => {
        setActiveValue(value)
        params.set("market", value);
        return params;
    })

    return (
        <div className="text__actions">
            <div className="text__buttons">
                <div className={`text__btn ${activeValue === "limit" ? "active" : "inactive"}`} onClick={() => onChange('limit')}>
                    Limit
                </div>
                <div className={`text__btn ${activeValue === "market" ? "active" : "inactive"}`} onClick={() => onChange('market')}>
                    Market
                </div>
                <div className={`text__btn ${activeValue === "stop-limit" ? "active" : "inactive"}`} onClick={() => onChange('stop-limit')}>
                Stop-Limit
                </div>
            </div>
        </div>
    )
}

export default ToggleIMarket
