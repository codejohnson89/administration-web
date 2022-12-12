import Link from 'next/link'
import styles from './styles.module.css'

import data from '../../Content/Footer/footer.json'


/**
 * It's a function that returns a JSX element.
 * @returns An array of JSX.Elements
 */
export default function Footer(): JSX.Element {
    return (
        <>
            <footer className={[styles.footer].join(' ')}>
                <p className={styles.copyright}>&copy;{data.copyright}</p>
                <p className={[styles.linkContainer].join(' ')}>
                    {
                        data.links.map((item) => {
                            return <Link key={item.link} className={styles.link} href={item.url}>{item.link}</Link>
                        })
                    }
                </p>
            </footer>
        </>
    )
}