import React, { useState } from 'react'
import "../css/Header.css"
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa6";
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';



function Header() {

    const [theme, setTheme] = useState(false)

    const changeTheme = () => {
        const root = document.getElementById("root");
        setTheme(!theme);
        if (theme) {
            root.style.backgroundColor = "black"
            root.style.color = "#fff"
        }
        else {
            root.style.backgroundColor = "#fff"
            root.style.color = "black"
        }
    }

    const navigate = useNavigate()

    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <div className='flex-row' onClick={() => navigate("/")}>
                <img className='logo' src='./src/images/logo.png' />
                <p className='logo-text'>ENES A.Ş</p>
            </div>

            <div className='flex-row'>
                <input className='search-input' type="text" placeholder='Bir şeyler ara' />
                <div>
                    {theme ? <CiLight className='icon' onClick={changeTheme} /> : <FaRegMoon className='icon' onClick={changeTheme} />}
                    <Badge badgeContent={4} color="error">
                        <CiShoppingBasket className='icon' />
                    </Badge>
                </div>


            </div>
        </div>
    )
}

export default Header