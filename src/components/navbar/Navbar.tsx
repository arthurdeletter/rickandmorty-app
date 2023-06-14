"use client"

import { mainNav } from '@/config/site';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { useState } from 'react';
import './Navbar.css';

export function Navbar() {
    const [active, setActive] = useState<boolean>(false);
    const path = usePathname()

  return (
    <nav aria-label='main-nav' className={"main__nav"} data-expanded={active}>
        <div className="container">
            <Link href="/">
                <div className='nav__logo'>
                    <Image fill priority src="/logo-black.png" alt="Logo Rick and morty" />
                </div>
            </Link>
            <ul className="nav__links">
                {
                    mainNav.items.map((item) => (
                        <li key={item.title}>
                            <Link href={item.href} onClick={() => setActive(false)} aria-current={path.startsWith(item.href) ? "page" : "false"}>{item.title}</Link>
                        </li>
                    ))
                }
            </ul>
            <button className="nav__toggle" id="navToggle" onClick={() => setActive(!active)}>
                {active ? <XMarkIcon className="toggle__icon" /> : <Bars3Icon className="toggle__icon" />}
            </button>
        </div>
    </nav>
  )
}