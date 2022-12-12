import styles from './styles.module.css';

export default function IntroHeader (props:any) {
    return (
        <h3 className={styles.header}>{props.heading}</h3>
    )
}