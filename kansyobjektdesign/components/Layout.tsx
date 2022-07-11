import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from './navbar'
import { slide as Menu } from 'react-burger-menu'
import NavbarListItem from './NavBarListItem'
import NavbarListItemSmall from './NavBarListItemSmall'
import Footer from './footer'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'Kansy Objekt Design' }: Props) => {
    function showSettings(event) {
        event.preventDefault()
    }

    return (
        <div style={{ backgroundColor: '34093b' }}>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Athiti:wght@200&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;1,300&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <header>
                {/* TODO: Close Element on each click */}
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
            </header>
            {children}
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout
