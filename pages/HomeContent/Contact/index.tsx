import HeadContainer from "../../../Components/Head";
import styles from './styles.module.css';

import Router from "next/router";
import Link from "next/link";
import { Button } from "react-bootstrap";
import IntroHeader from "../../../Components/IntroHeader";

export default function Contact(): JSX.Element {

    const router = Router
    return (
        <>
            <HeadContainer title="Contact Us" meta="Colonnade Contact us page"/>
                <IntroHeader heading="Contact"/>
                <div className={[styles.content].join(' ')}>
                    <div className={[styles.addressContainer].join(' ')}>
                        <h3>Address</h3>
                        <address>
                            <p>Heartland Payment Solutions</p>
                            <p>570 Devall Dr. Suite 202</p>
                            <p>Auburn University, AL 36832</p>
                        </address>
                        <Button size="lg">
                            <Link className={styles.btn} href="colonnadesupportlevel2@e-hps.com">Contact Support</Link>
                        </Button>
                    </div>
                </div>
        </>
    )
}