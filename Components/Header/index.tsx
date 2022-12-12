import Container from '../Layout/Container';
import styles from './header.module.css';
import { menuItems } from '../../Content/Navigation';
import Logo from './Logo';
import { useEffect, useState } from 'react';
import AuthProfile from './AuthProfile';
import PrimaryNav from './Navigation/PrimaryNav';
import SecondaryNav from './Navigation/SecondaryNav';
import { useRouter } from 'next/router';



export default function Header() {
    const [navItems, setNavItems] = useState(menuItems);
    const router = useRouter();
    let [filteredSubNavItems, setFilteredSubNavItems] = useState<{}[]>([])

    useEffect(() => {
        console.log('running')
         navItems.filter((item) => {
            if(item.link == router.route) {
                setFilteredSubNavItems(item.subLinks);
            }
        })
        console.log('ending')
    })

    return (
        <>
            <header className={[styles.NavBar].join(' ')}>
                <Container classNameCustom="navContainer">
                    <Logo/>
                    <PrimaryNav navigation={navItems}/>
                    <AuthProfile/>
                </Container>
            </header>
            <SecondaryNav navigation={filteredSubNavItems}/>
        </>
    )
}