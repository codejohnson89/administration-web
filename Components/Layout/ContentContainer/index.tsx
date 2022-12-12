import styles from './styles.module.css';

export default function ContentContainer (props:any) {
    return (
        <main className={styles.main}>
            {props.children}
        </main>
    )
}