import styles from './styles.module.css';

export default function Container(props:any): JSX.Element {
    return (
        <>
            <div className={[styles.container, props.classNameCustom].join(' ')}>
                {props.children}
            </div>
        </>
    )
}