import Link from "next/link";
import styles from '../header.module.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

interface NavItems {
    navigation: {
        primaryLink: string;
        link: string;
        subLinks: ({
            name: string;
            link: string;
            subLinksExist: boolean;
            ariaControls?: boolean;
            ariaExpanded?: boolean;
            sublinks: {
                label: string;
                link: string;
            }[];
        } | {
            name: string;
            subLinksExist: boolean;
            link: string;
            sublinks?: undefined;
        })[];
    }[]
}


export default function PrimaryNav(props:NavItems) {
    return (
        <>
            <Navbar className={[styles.navContainer].join(' ')}>
                        <Nav className={['flex-row', styles.listItems].join(' ')}>
                            {
                                props.navigation.map((item, index) => {
                                    return (
                                        
                                            <Nav.Item key={index} className={[styles.primaryLink].join(' ')}>
                                                <Link href={item.link}>
                                                    {item.primaryLink}
                                                </Link>
                                            </Nav.Item>
                                    )
                                })
                            }
                        </Nav>
                    </Navbar>
        </>
    )
}