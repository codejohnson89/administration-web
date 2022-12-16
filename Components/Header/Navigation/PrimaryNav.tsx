import Link from "next/link";
import styles from '../header.module.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import { useRouter } from "next/router";

interface NavItems {
    navigation: {
        primaryLink: string;
        contentText: string;
        link: string;
        isActive: boolean;
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
    const [active, setActive] = useState<string>();
    const router = useRouter();

    useEffect(() => {
        console.log(router.asPath)
        let pathArr = (router.asPath.split('/'))
        pathArr.shift();
        // if (pathArr[0] != "/") {
        //     pathArr[0] = "HomeContent"
        //     console.log(pathArr[0])
        //     setActive(pathArr[0])
        // }
        setActive(pathArr[0])
    },[router.asPath])

    return (
        <>
            <Navbar className={[styles.navContainer].join(' ')}>
                        <Nav className={['flex-row', styles.listItems].join(' ')}>
                            {
                                props.navigation.map((item, index) => {
                                    return (
                                        
                                            <Nav.Item 
                                                onClick={() => setActive(item.primaryLink)} 
                                                key={index} 
                                                className={[styles.primaryLink, active == item.contentText && 'active'].join(' ')}>
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