import Link from 'next/link'
import HeadContainer from '../../../Components/Head'
import data from '../../../Content/Home/About.json'
import IntroHeader from '../../../Components/IntroHeader';
import styles from './styles.module.css'




/**
 * The About function returns a JSX.Element that contains a HeadContainer component, an h1 element, and
 * a div element.
 * @returns A React component.
 */
export default function About(): JSX.Element {
    return (
        <>
            <HeadContainer title="About" meta="Colonnade About Us Page"/>
            <IntroHeader heading={data.heading}/>
            <div className={[styles.content].join(' ')}>
                <p>The ACH Gateway Administration Website. A configuration and maintenance site for the Gateway. This website is limited to internal Heartland users and can not be accessed by users that do not have domain credentials. Access to this site is further restricted to protect the confidential nature of the data that is stored within. If you require access to this site, please submit a request to <Link className={styles.link} href="mailto:colonnadesupportlevel2@e-hps.com">Colonnade Support</Link> and detail the need.</p>
                <p>The information contained within this website is confidential and should be treated as such.</p>
            </div>
        </>
    )
}