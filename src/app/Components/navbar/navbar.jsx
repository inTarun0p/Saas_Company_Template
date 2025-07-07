"use client"
import React from 'react'
import "@/app/style/nav.css"
import Link from 'next/link'
function Navbar() {
    const [handleClick, sethandleClick] = React.useState(0);
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <h1>Logo</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li><Link href="/" onClick={() => sethandleClick(0)} className={handleClick == 0 ? "active" : "notactive"}>Home</Link></li>

                        <li><Link href="/aboutus" onClick={() => sethandleClick(1)} className={handleClick == 1 ? "active" : "notactive"}>About</Link></li>
                        <li className="dropdown">
                            <Link href="#" onClick={() => sethandleClick(2)} className={handleClick == 2 ? "active" : "notactive"}>Services
                            <ul className="dropdown-content">
                                <li><Link href="#">Service 1</Link></li>
                                <li><Link href="#">Service 2</Link></li>
                                <li><Link href="#">Service 3</Link></li>
                            </ul>
                            </Link>
                        </li>
                        <li><Link href="#" onClick={() => sethandleClick(3)} className={handleClick == 3 ? "active" : "notactive"}>Portfolio</Link></li>
                        <li><Link href="/Pricing" onClick={() => sethandleClick(4)} className={handleClick == 4 ? "active" : "notactive"}>Pricing</Link></li>
                        <li><Link href="/contactus" onClick={() => sethandleClick(5)} className={handleClick == 5 ? "active" : "notactive"}>Contact</Link></li>

                    </ul>
                </div>
                <div className="button">
                    <Link href="/signin">Sign In</Link>
                    <Link href="/signup">Sign Up</Link>
                </div>
            </div>
        </>
    )
}


export default Navbar
