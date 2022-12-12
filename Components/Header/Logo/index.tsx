import Image from "next/image";
import Link from "next/link";

import logo from '../../../public/achlogo.png';

export default function Logo() {
    return (
        <>
            <div className={['site-logo', 'site-title'].join(' ')}>
                <Link href="/">
                    <Image priority src={logo} alt="Heartland Ach Gateway Administration"/>
                </Link>
            </div>
        </>
    )
}