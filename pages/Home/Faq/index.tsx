import HeadContainer from './../../../Components/Head/index';
import Accordion from 'react-bootstrap/Accordion';
import { FeeSettlementAgreement, AchReturnCodes, AchFiles, Claims, EffectiveDate, DisbursementDate } from "../../../Content/Home/FAQ";
import IntroHeader from '../../../Components/IntroHeader/index';
import styles from './styles.module.css';
import ArrowIcon from "../../../Components/ArrowIcon";

/* The above code is a React component that is using the Accordion component from the react-bootstrap
library. */
export default function Faq(): JSX.Element {
    return (
        <>
            <HeadContainer title='Faq' meta='Faq' />
            <IntroHeader heading="Frequently Asked Questions" />
            <Accordion className={styles.accordions}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className={styles.header}>
                        <ArrowIcon fill="#fcfcfc"/>
                        {FeeSettlementAgreement.question}
                    </Accordion.Header>
                    <Accordion.Body className={styles.accordionBody}>
                        <p>{FeeSettlementAgreement.text}</p>
                        <ol>
                            {
                                FeeSettlementAgreement.scenarios.map((item:string, index:number) => {
                                    return (
                                        <li key={index}>{item}</li>
                                    )
                                })
                            }
                        </ol>
                        <p>{FeeSettlementAgreement.text2}</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className={styles.header}>
                        <ArrowIcon fill="#fcfcfc"/>
                        {AchReturnCodes.question}
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>{AchReturnCodes.text}</p>
                        <ul>
                            {
                                AchReturnCodes.list.map((item:string, index:number) => {
                                    return (
                                        <li key={index}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header className={styles.header}>
                        <ArrowIcon fill="#fcfcfc"/>
                        {Claims.question}
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>{Claims.text}</p>
                        <div >
                            <p><b>{Claims.generalClaims.heading}</b></p>
                            <p>{Claims.generalClaims.text}</p>
                            <ul>
                                {
                                    Claims.generalClaims.list.map((item: string, index) => {
                                        return (
                                            <li key={index}>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div >
                            <p><b>{Claims.securityClaims.heading}</b></p>
                            <p>{Claims.securityClaims.text}</p>
                            <ul>
                                {
                                    Claims.securityClaims.list.map((item:string, index:number) => {
                                        return (
                                            <li key={index}>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div >
                            <p><b>{Claims.reportingClaims.heading}</b></p>
                            <p>{Claims.reportingClaims.text}</p>
                            <ul>
                                {
                                    Claims.reportingClaims.list.map((item:string, index:number) => {
                                        return (
                                            <li key={index}>{item}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header className={styles.header}>
                        <ArrowIcon fill="#fcfcfc"/>
                        {AchFiles.question}
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>
                            {AchFiles.text}
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header className={styles.header}>
                        <ArrowIcon fill="#fcfcfc"/>
                        {EffectiveDate.question}
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>{EffectiveDate.text}</p>
                        <p>{EffectiveDate.text2}</p>
                        <div>
                            <p><b>{EffectiveDate.scenario1.scene.heading}</b></p>
                            <p>{EffectiveDate.scenario1.scene.text}</p>
                            <p><b>{EffectiveDate.scenario1.result.heading}</b></p>
                            <p>{EffectiveDate.scenario1.result.text}</p>
                        </div>
                        <div>
                            <p><b>{EffectiveDate.scenario2.scene.heading}</b></p>
                            <p>{EffectiveDate.scenario2.scene.text}</p>
                            <p><b>{EffectiveDate.scenario2.result.heading}</b></p>
                            <p>{EffectiveDate.scenario2.result.text}</p>
                        </div>
                        <p>{EffectiveDate.text3}</p>
                        <div>
                            <p><b>{EffectiveDate.scenario3.scene.heading}</b></p>
                            <p>{EffectiveDate.scenario3.scene.text}</p>
                            <p><b>{EffectiveDate.scenario3.result.heading}</b></p>
                            <p>{EffectiveDate.scenario3.result.text}</p>
                        </div>
                        <div>
                            <p><b>{EffectiveDate.scenario4.scene.heading}</b></p>
                            <p>{EffectiveDate.scenario4.scene.text}</p>
                            <p><b>{EffectiveDate.scenario4.result.heading}</b></p>
                            <p>{EffectiveDate.scenario4.result.text}</p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header className={styles.header}>
                        <ArrowIcon fill="#fcfcfc"/>
                        {DisbursementDate.question}
                    </Accordion.Header>
                    <Accordion.Body>
                        <p>{DisbursementDate.text}</p>
                        <p>{DisbursementDate.text2}</p>
                        <div>
                            <p><b>{DisbursementDate.scenario1.scene.heading}</b></p>
                            <p>{DisbursementDate.scenario1.scene.text}</p>
                            <p><b>{DisbursementDate.scenario1.result.heading}</b></p>
                            <p>{DisbursementDate.scenario1.result.text}</p>
                        </div>
                        <p>{DisbursementDate.text3}</p>
                        <div>
                            <p><b>{DisbursementDate.scenario2.scene.heading}</b></p>
                            <p>{DisbursementDate.scenario2.scene.text}</p>
                            <p><b>{DisbursementDate.scenario2.result.heading}</b></p>
                            <p>{DisbursementDate.scenario2.result.text}</p>
                        </div>
                        <p>{DisbursementDate.text4}</p>
                        <div>
                            <p><b>{DisbursementDate.scenario3.scene.heading}</b></p>
                            <p>{DisbursementDate.scenario3.scene.text}</p>
                            <p><b>{DisbursementDate.scenario3.result.heading}</b></p>
                            <p>{DisbursementDate.scenario3.result.text}</p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}