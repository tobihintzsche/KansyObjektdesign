import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import Logo from '../utils/kansylogo.png'
import { slide as Menu } from 'react-burger-menu'
import NavbarListItem from './NavBarListItem'
import NavbarListItemSmall from './NavBarListItemSmall'

export default function Navbar() {
    return (
        <>
            <Menu>
                <div className="md:m-auto">
                    <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-16 md:text-xl">
                        <div className="flex flex-col gap-4 md:gap-16">
                            <NavbarListItem text="Home" />
                            <NavbarListItem text="AboutUs" />
                            <NavbarListItem text="Referenzen" />
                            <NavbarListItem text="Karriere" />
                            <NavbarListItem text="Kontakt" />
                        </div>
                        <div>
                            <div className="text-2xl orbitron text-primary-orange">
                                WORK
                            </div>
                            <div className="flex flex-col gap-2 mt-4">
                                <NavbarListItemSmall text="Hotel" />
                                <NavbarListItemSmall text="Bar" />
                                <NavbarListItemSmall text="Lounge" />
                                <NavbarListItemSmall text="Café" />
                                <NavbarListItemSmall text="Restaurant" />
                                <NavbarListItemSmall text="Bäckerei" />
                                <NavbarListItemSmall text="Shop" />
                                <NavbarListItemSmall text="Küche" />
                            </div>
                        </div>
                    </div>
                </div>
            </Menu>
        </>
    )
}
