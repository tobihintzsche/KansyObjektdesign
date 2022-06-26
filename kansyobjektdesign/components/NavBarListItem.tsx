import * as React from 'react'
import ListItem from './ListItem'
import { User } from '../interfaces'
import Link from 'next/link'

type NavbarListItemProps = {
    text: string
}

const NavbarListItem = ({ text }: NavbarListItemProps) => {
    const textToLowerCase = text.toLowerCase()

    return (
        <div className="text-6xl text-charcoal-100">
            <text className="underline font-alt-60">
                <Link href={`/${text === 'Home' ? '' : textToLowerCase}`}>
                    {text}
                </Link>
            </text>
        </div>
    )
}

export default NavbarListItem
