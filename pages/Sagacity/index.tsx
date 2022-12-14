import styles from './styles.module.css';
import { SagacityContent } from './../../Content/Sagacity/SagacityContent';

export default function SagaCity() {
    return (
        <>
            <section className='content-wrapper'>
                <h2 className={styles.title}>{SagacityContent.heading}</h2>
                <p className={styles.contentIntro}>{SagacityContent.introText}</p>
                <ul id='tutorial-areas' className={styles.listContainer}>
                    {
                        SagacityContent.content.map((item: {heading: string, text: string}, index:number) => {
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
                <p>If you need it for support, you can check the reported <a href="#">Sagacity version information</a></p>
            </section>
        </>
    )
}