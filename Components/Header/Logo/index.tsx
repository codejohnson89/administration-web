import Image from "next/image";
import Link from "next/link";

import styles from './styles.module.css'
import logo from '../../../public/HeartlandLogo.png';

export default function Logo() {
    return (
        <>
            <div className={[styles.logoContainer,'site-logo', 'site-title'].join(' ')}>
                <Link href="/">
                    <Image priority src={logo} alt="Heartland Ach Gateway Administration"/>
                    <h4 className={styles.heading}>ACH Gateway Administration</h4>
                </Link>
            </div>
        </>
    )
}