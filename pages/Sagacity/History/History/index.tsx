import styles from '../../styles.module.css';
import { HistoryContent } from '../../../../Content/Sagacity/History/HistoryContent';

export default function History() {
    return (
        <>
            <section className='content-wrapper'>
                <h2 className={styles.title}>{HistoryContent.title}</h2>
                <p className={styles.contentIntro}>{HistoryContent.introText}</p>
                <ul id='tutorial-areas' className={styles.listContainer}>
                    {
                        HistoryContent.content.map((item: {heading: string, text: string}, index:number) => {
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