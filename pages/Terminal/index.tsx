import { TerminalContent } from "../../Content/Terminal/terminalHome";
import styles from './styles.module.css';

export default function Terminal() {
    return (
        <>
            <section className='content-wrapper'>
                <h2 className={styles.title}>{TerminalContent.title}</h2>
                <p className={styles.contentIntro}>{TerminalContent.text}</p>
                <ul id='tutorial-areas' className={styles.listContainer}>
                    {
                        TerminalContent.content.map((item, index) => {
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