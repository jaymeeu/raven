import React, { useEffect, useState } from 'react'
import './style.css'
import { useSearchParams } from "react-router-dom";


const DurationToggle = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeValue, setActiveValue] = useState('')
    const status = searchParams.get("duration")
    useEffect(() => {
        if (status === null) setActiveValue('1H')
        else setActiveValue(status)
    }, [])

    const onChange = (value) => setSearchParams(params => {
        setActiveValue(value)
        params.set("duration", value);
        return params;
    })

    return (
        <div className="text__buttons">
            <div style={{ fontSize: '14px', color: 'var(--light-color)', marginRight: "20px" }}>
                Time
            </div>
            <div className={`text__btn ${activeValue === "1H" ? "active" : "inactive"}`} onClick={() => onChange('1H')}>
                1H
            </div>
            <div className={`text__btn ${activeValue === "2H" ? "active" : "inactive"}`} onClick={() => onChange('2H')}>
                2H
            </div>
            <div className={`text__btn ${activeValue === "4H" ? "active" : "inactive"}`} onClick={() => onChange('4H')}>
                4H
            </div>
            <div className={`text__btn ${activeValue === "1D" ? "active" : "inactive"}`} onClick={() => onChange('1D')}>
                1D
            </div>
            <div className={`text__btn ${activeValue === "1W" ? "active" : "inactive"}`} onClick={() => onChange('1W')}>
                1W
            </div>
            <div className={`text__btn ${activeValue === "1M" ? "active" : "inactive"}`} onClick={() => onChange('1M')}>
                1M
            </div>
        </div>
    )
}

export default DurationToggle
