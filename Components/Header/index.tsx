import Container from '../Layout/Container';
import styles from './header.module.css';
import { menuItems } from '../../Content/Navigation';
import Logo from './Logo';
import { useEffect, useState } from 'react';
import AuthProfile from './AuthProfile';
import PrimaryNav from './Navigation/PrimaryNav';
import SecondaryNav from './Navigation/SecondaryNav';
import { useRouter } from 'next/router';

/**
 * The Header function is a React component that renders the primary navigation and secondary
 * navigation. The secondary navigation is filtered based on the current route.
 * @returns The filteredSubNavItems is returning an filterd array.
 * </code>
 */
export default function Header() {
    const [navItems, setNavItems] = useState(menuItems);
    const router = useRouter();
    let [filteredSubNavItems, setFilteredSubNavItems] = useState<{}[]>([])

    useEffect(() => {
        console.log(router)
         navItems.filter((item) => {
            // The second check for the url route of "/_error" is used to make sure the secondary navigation will load. 
            if(item.link.includes(router.route)) {
                console.log('true')
                setFilteredSubNavItems(item.subLinks);
            } else if (router.asPath.includes(item.link)) {
                console.log('false')
                setFilteredSubNavItems(item.subLinks)
            }
        })
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