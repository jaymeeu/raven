import React, { useState, useEffect } from 'react';
import './styles.css'
import logo from "@/assets/logo.svg"
import avatar from "@/assets/avatar.svg"
import { TbLogout2 } from "react-icons/tb";
import { FiGlobe } from "react-icons/fi";
import { IoChevronForward } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import PricingSelector from '@/components/PricingSection/PriceSelector'

const Index = () => {

    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        const toggler = document.getElementById('navbar-toggler');
        const closeBtn = document.getElementById('navbar-close');

        toggler.addEventListener('click', () => {
            setMenuActive(!menuActive);
        });

        closeBtn.addEventListener('click', () => {
            setMenuActive(false);
        });
    }, []);

const navigate = useNavigate()
    return (
        <div className='header'>
            <div className="header__right">
                <img onClick={()=>navigate("/")} className="header__logo" src={logo} />
                <div className="header__links">
                    <a href='#' className="header__links--active">
                        Dashboard
                    </a>
                    <a href='#' className="header__links--inactive">
                        Markets
                    </a>
                    <a href='#' className="header__links--inactive">
                        Wallet
                    </a>
                </div>
            </div>

            <PricingSelector type={'search'} />

            <div className="header__left">
                <div className="header__left--profile">
                    <img src={avatar} />
                    <span>Olakunle Te...</span>
                    <IoChevronForward />
                </div>
                <span><FiGlobe /></span>
                <span onClick={()=>navigate("/login")}><TbLogout2 /></span>
            </div>

            <div className="header__left--mobile">
                <img src={avatar} />
                <span><FiGlobe size={24} color='white' /></span>
                <button className="navbar__toggler" id="navbar-toggler">
                    <RiMenu3Fill />
                </button>
            </div>

            <div className={`mobile__sidebar ${menuActive ? 'active' : ''}`} id='mobile__sidebar'>
                <div className="close__btn" id='navbar-close'>
                    <AiOutlineCloseCircle size={24} color='white' />
                </div>
                <div className='flex__sidebar'>
                    <a href='#' className="header__links--active">
                        Dashboard
                    </a>
                    <a href='#' className="header__links--inactive">
                        Markets
                    </a>
                    <a href='#' className="header__links--inactive">
                        Wallet
                    </a>
                    <span onClick={()=>navigate("/login")} className="header__links--inactive">
                        Login
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Index
