import styles from './styles.module.css';
import { SupportContent } from './../../Content/Support/supportHome';

export default function Support() {
    return (
        <>
            <section className='content-wrapper'>
                <p className={styles.contentIntro}>{SupportContent.introText}</p>
                <ul id='tutorial-areas' className={styles.listContainer}>
                    {
                        SupportContent.content.map((item:{heading: string, text: string}, index:number) => {
                            return (
                                <li className={[styles.list].join(' ')} key={item.heading}>
                                    <div className={[styles.icon, '_' + `${index + 1}`].join(' ')}></div>                                       
                                    <div className={styles.content}>
                                        <h5 className={styles.heading}>{item.heading}</h5>
                                        <p className={styles.content}>{item.text}</p>
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