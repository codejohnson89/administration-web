import styles from './styles.module.css';

export default function FormError(props:any): JSX.Element {
    return (
        <>
            <div className="clearfix">
                <p className={["col-sm-6", "offset-md-6", styles.error].join(' ')}>{props.errorText}</p>
            </div>
        </>
    )
}