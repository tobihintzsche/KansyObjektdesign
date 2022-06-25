import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from './navbar'
import { slide as Menu } from 'react-burger-menu'

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
                    <div className="w-3/4  m-auto">
                        <div className="flex justify-between gap-16 text-xl">
                            <div>
                                <div className="text-6xl">text</div>
                                <div className="text-6xl">Text</div>
                                <div className="text-6xl">Text</div>
                            </div>
                            <div>
                                <div className="text-3xl">Text</div>
                                <div className="text-2xl">Text</div>
                                <div className="text-2xl">Text</div>
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
