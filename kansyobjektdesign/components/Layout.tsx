import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from './navbar'
import { slide as Menu } from 'react-burger-menu'
import NavbarListItem from './NavBarListItem'
import NavbarListItemSmall from './NavBarListItemSmall'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
    function showSettings(event) {
        event.preventDefault()
    }

    return (
        <div style={{ backgroundColor: '2A2A2A' }}>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <header>
                <Menu>
                    <div className="w-3/5 place-content-center mx-auto">
                        <div className="flex justify-between gap-16 text-xl">
                            <div className="flex flex-col gap-16">
                                <NavbarListItem text="Home" />
                                <NavbarListItem text="AboutUs" />
                                <NavbarListItem text="Referenzen" />
                                <NavbarListItem text="Karriere" />
                                <NavbarListItem text="Kontakt" />
                            </div>
                            <div>
                                <div className="text-3xl quicksand text-primary-orange">
                                    WORK
                                </div>
                                <div className="flex flex-col gap-4 mt-4">
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
            {/* <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer> */}
        </div>
    )
}

export default Layout
