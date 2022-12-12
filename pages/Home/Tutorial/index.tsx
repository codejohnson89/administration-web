import styles from './styles.module.css'
import data from  '../../../Content/Home/Tutorial.json';
import ContentContainer from './../../../Components/Layout/ContentContainer/index';
import Image from 'next/image';

interface HomePageText {
    generalText: string;
    tutorialAreas: [{
        heading: string;
        text: string;
    }]
}



/**
 * It's a function that returns a JSX element. 
 * 
 * The JSX element is a fragment that contains a section element with a class name of
 * 'content-wrapper'. 
 * 
 * The section element contains a paragraph element with a class name of 'content' and a ul element
 * with an id of 'tutorial-areas' and a class name of 'listContainer'. 
 * 
 * The paragraph element contains the value of the generalText property of the data object. 
 * 
 * The ul element contains a list of li elements. 
 * 
 * The li elements are created by mapping over the tutorialAreas property of the data object. 
 * 
 * Each li element contains a h5 element with a class name of 'heading' and a paragraph element with a
 * class name of 'content'. 
 * 
 * The h5 element contains the value of the heading property of the current item in
 */
export default function Tutorial(): JSX.Element {

    return (
        <>
            <section className='content-wrapper'>
                <p className={styles.contentIntro}>{data.generalText}</p>
                <ul id='tutorial-areas' className={styles.listContainer}>
                    {
                        data.tutorialAreas.map((item, index) => {
                            return (
                                <li className={[styles.list].join(' ')} key={item.heading}>
                                    <div className={[styles.icon, '_' + index].join(' ')}></div>                                       
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