import * as React from 'react'
import ListItem from './ListItem'
import { User } from '../interfaces'
import Link from 'next/link'

type NavbarListItemSmallProps = {
    text: string
}

const NavbarListItemSmall = ({ text }: NavbarListItemSmallProps) => {
    const textToLowerCase = text.toLowerCase()

    return (
        <div className="text-3xl text-charcoal-100">
            <text className="underline">
                <Link href={`/work/${textToLowerCase}`}>{text}</Link>
            </text>
        </div>
    )
}

export default NavbarListItemSmall
