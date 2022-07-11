import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import Logo from '../utils/kansylogo.png'
import { slide as Menu } from 'react-burger-menu'
import NavbarListItem from './NavBarListItem'
import NavbarListItemSmall from './NavBarListItemSmall'

export default function Footer() {
    return (
        <>
            <div className="flex justify-between m-auto w-3/5 text-primary-orange text-bold mt-32 mb-8 text-2xl ">
                <Link href={'/referenzen'}>
                    <text>Referenzen</text>
                </Link>
                <Link href={'/datenschutz'}>
                    <text>Datenschutz</text>
                </Link>
                <Link href={'/impressum'}>
                    <text>Impressum</text>
                </Link>
                <Link href={'/karriere'}>
                    <text>Karriere</text>
                </Link>
            </div>
        </>
    )
}
