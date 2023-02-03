import Link from "next/link";
import { Button } from "react-bootstrap";
import styles from './styles.module.css';

export function PageHeaderWithTwoButtons(props:any){
    return(
        <>
            <div className={styles.pageHeader}>
                <h2 className={styles.headingText}>{props.header}</h2>
                <div className={styles.btnContainer}>
                <Button className={styles.btn}>
                    <Link href={props.link}>{props.text}</Link>
                </Button>
                <Button className={styles.btn}>
                    <Link href={props.link2}>{props.text2}</Link>
                </Button>
                </div>
            </div>
            <hr></hr>
        </>
    )
}

export function PageHeaderWithButton(props:any) {
    return (
        <>
            <div className={styles.pageHeader}>
                <h2 className={styles.headingText}>{props.header}</h2>
                <Button className={styles.btn}>
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