import * as React from 'react'
import Link from 'next/link'

type NavbarListItemProps = {
    text: string
}

const NavbarListItem = ({ text }: NavbarListItemProps) => {
    const textToLowerCase = text.toLowerCase()

    return (
        <div className="text-charcoal-100">
            <Link href={`/${text === 'Home' ? '' : textToLowerCase}`}>
                <a className="poppins text-3xl md:text-6xl underline">{text}</a>
            </Link>
        </div>
    )
}

export default NavbarListItem
