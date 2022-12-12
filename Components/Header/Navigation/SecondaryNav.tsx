import Link from "next/link";
import styles from '../header.module.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


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


/* The above code is a React component that is being used to render a secondary navigation menu.
The component is being passed an array of objects that contain the navigation items.
The component is using the useState hook to set the state of the component.
The component is using the useEffect hook to filter the props.navigation array and setting the
filteredSubNavItems state to the filtered array.
The component is using the useRouter hook to get the current route.
The component is using the useState hook to set the state of the component.
The component is using the */
export default function SecondaryNav(props:any) {
    return (
        <>
            <Navbar className={[styles.SecondaryNav].join(' ')}>
                <div className={['container', styles.secondaryNavContainer].join(' ')}>
                        {
                            props.navigation.map((navItem:any, index:number) => {
                                return (
                                    <div key={index}>
                                    {
                                        !navItem.subLinksExist ?
                                            <Nav.Item key={navItem.name}>
                                                <Link className={[styles.sublink, 'nav-link'].join(' ')} href={navItem.link}>{navItem.name}</Link>
                                            </Nav.Item>
                                        :
                                            <NavDropdown className={styles.sublink} key={navItem.name} title={navItem.name} id={navItem.name}>
                                                {
                                                    navItem.sublinks.map((item:any) => {
                                                        return (
                                                            <NavDropdown.ItemText className={styles.dropdownItem} key={item.label}>
                                                                <Link className={styles.link} href={item.link}>{item.label}</Link>
                                                            </NavDropdown.ItemText>
                                                        )
                                                    })
                                                }
                                            </NavDropdown>
                                    }
                                    </div>
                                )
                            })
                        }
                </div>
            </Navbar>
        </>
    )
}

