import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import Logo from '../utils/kansylogo.png'

export default function Navbar() {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <>
            <nav className="flex items-center m-auto flex-wrap w-4/6">
                <button
                    className=" inline-flex p-3 hover:bg-orange-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
                    onClick={handleClick}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                <div
                    className={`${
                        active ? '' : 'hidden'
                    }   w-full lg:inline-flex lg:flex-grow lg:w-auto justify-between align-center`}
                >
                    <div className="flex items-center">
                        <Link href="/">
                            <a className="lg:inline-flex lg:w-auto w-full  py-2 text-white font-bold hover:text-organge ">
                                Referenzen
                            </a>
                        </Link>
                        <Link href="/herren">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-white font-bold hover:text-organge">
                                Über Uns
                            </a>
                        </Link>
                        <Link href="/jugend">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-white font-bold hover:text-organge">
                                Karriere
                            </a>
                        </Link>
                    </div>
                    <Link href="/">
                        <a className="inline-flex items-center pt-2 pb-2 ">
                            <Image src={Logo} alt="ETSV Logo" />
                        </a>
                    </Link>
                </div>
            </nav>
        </>
    )
}
