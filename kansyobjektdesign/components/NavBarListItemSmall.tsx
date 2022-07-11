import * as React from 'react'
import Link from 'next/link'

type NavbarListItemSmallProps = {
    text: string
}

const NavbarListItemSmall = ({ text }: NavbarListItemSmallProps) => {
    const textToLowerCase = text.toLowerCase()

    return (
        <div className="text-charcoal-100">
            <Link href={`/work/${textToLowerCase}`}>
                <a className="poppins text-xl md:text-3xl underline">{text}</a>
            </Link>
        </div>
    )
}

export default NavbarListItemSmall
