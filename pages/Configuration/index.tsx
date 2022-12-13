import { ConfigurationHomeContent } from "../../Content/Configuration/ConfigurationHome";
import styles from './styles.module.css';

export default function Configuration() {
    return (
        <>
            <section className="content-wrapper">
                <p>{ConfigurationHomeContent.introText}</p>
                <ul className={styles.listContainer}>
                    {
                        ConfigurationHomeContent.listItems.map((item:any, index:number) => {
                            return (
                                <li className={[styles.list].join(' ')} key={item.heading}>
                                    <div className={[styles.icon, '_' + `${index + 1}`].join(' ')}></div>
                                    <div className={styles.content}>
                                        <h5 className={styles.heading}>{item.heading}</h5>
                                        <p className={styles.content}>{item.content}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        </>
    )
}