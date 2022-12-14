import Link from "next/link";
import { Button } from "react-bootstrap";
import styles from './styles.module.css';

export function PageHeaderWithButton(props:any) {
    return (
        <>
            <div className={styles.pageHeader}>
                <h2 className={styles.headingText}>{props.header}</h2>
                <Button>
                    <Link href={props.link}>{props.text}</Link>
                </Button>
            </div>
            <hr></hr>
        </>
    )
}
export function PageHeaderWithOutButton(props:any) {
    return (
        <>
            <div className={styles.pageHeader}>
                <h2 className={styles.headingText}>{props.header}</h2>
            </div>
            <hr></hr>
        </>
    )
}