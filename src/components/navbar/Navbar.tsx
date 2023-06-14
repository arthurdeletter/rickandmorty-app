"use client"

import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import './Navbar.css'
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
    const [active, setActive] = useState<boolean>(false);

  return (
    <nav aria-label='main-nav' className={"main__nav"} data-expanded={active}>
        <div className="container">
            <Link href="/">
                <div className='nav__logo'>
                    <Image fill priority src="/logo-black.png" alt="Logo Rick and morty" />
                </div>
            </Link>
            <ul className="nav__links">
                <li>
                    <Link href={"/characters"} onClick={() => setActive(false)}>Characters</Link>
                </li>
                <li>
                    <Link href={"/locations"} onClick={() => setActive(false)}>Locations</Link>
                </li>
                <li>
                    <Link href={"/episodes"} onClick={() => setActive(false)}>Episodes</Link>
                </li>
            </ul>
            <button className="nav__toggle" id="navToggle" onClick={() => setActive(!active)}>
                {active ? <XMarkIcon className="toggle__icon" /> : <Bars3Icon className="toggle__icon" />}
            </button>
        </div>
    </nav>
  )
}