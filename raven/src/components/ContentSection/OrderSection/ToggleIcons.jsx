import React, { useEffect, useState } from 'react'
import IconBtn from './IconBtn'
import icon1 from '@/assets/icons/icon1.svg'
import icon2 from '@/assets/icons/icon2.svg'
import icon3 from '@/assets/icons/icon3.svg'
import { useSearchParams } from "react-router-dom";
import { IoChevronDown } from 'react-icons/io5'


const ToggleIcons = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeValue, setActiveValue] = useState('')
    const status = searchParams.get("list")
    useEffect(() => {
        if (status === null) setActiveValue('both')
        else setActiveValue(status)
    }, [])

    const onChange = (value) => setSearchParams(params => {
        setActiveValue(value)
        params.set("list", value);
        return params;
    })

    return (
        <div className="icon__actions">
            <div className="icon__buttons">
                <IconBtn className={`icon__btn ${activeValue === "both" ? "active" : "inactive"}`} onClick={() => onChange('both')} icon={icon1} />
                <IconBtn className={`icon__btn ${activeValue === "top" ? "active" : "inactive"}`} onClick={() => onChange('top')} icon={icon2} />
                <IconBtn className={`icon__btn ${activeValue === "bottom" ? "active" : "inactive"}`} onClick={() => onChange('bottom')} icon={icon3} />
            </div>
            <div className="action__selector">
                <span>10</span>
                <IoChevronDown className='action__chevron' />
            </div>
        </div>
    )
}

export default ToggleIcons
