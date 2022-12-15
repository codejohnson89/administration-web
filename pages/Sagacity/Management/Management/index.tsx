import styles from '../../styles.module.css';
import { ManagementContent } from './../../../../Content/Sagacity/Management/ManagementContent';

export default function Management() {
    return (
        <>
            <section className='content-wrapper'>
                <h2 className={styles.title}>{ManagementContent.title}</h2>
                <p className={styles.contentIntro}>{ManagementContent.introContent}</p>
                <ul id='tutorial-areas' className={styles.listContainer}>
                    {
                        ManagementContent.content.map((item: {heading: string, text: string}, index:number) => {
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