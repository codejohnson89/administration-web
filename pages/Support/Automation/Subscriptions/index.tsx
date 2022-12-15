import { Button, Form, Row } from "react-bootstrap";
import { PageHeaderWithButton } from './../../../../Components/PageHeader/index';
import { useForm } from "react-hook-form";
import styles from '../../styles.module.css';


export default function BillingGroups():JSX.Element {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);


    return (
        <>
            <section className="content-wrapper">
                <PageHeaderWithButton link="../../../Support/Automation/Subscriptions/Create/" text="Add New Subscription" header="Report Subscriber Index"/>
                <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Filter Subscriptions By</legend>
                    <div className={styles.formFields}>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("EmailAddress")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>FTP Address</Form.Label>
                                <Form.Control type="text" {...register("FTPAddress")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Network Share</Form.Label>
                                <Form.Control type="text" {...register("NetworkShare")}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Template</Form.Label>
                                <Form.Select {...register("Template")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                            {/* The below field will need to be worked in detail since its a multifunction dropdown menu */}
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Template Parameter</Form.Label>
                                <Form.Select {...register("FeesEnabled")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row className={styles.btnContainer}>
                            <Button className="col-sm-2" type="submit">Filter</Button>
                            <Button className="col-sm-2" type="button">Clear</Button>
                        </Row>
                    </div>
                </Form>
            </section>
        </>
    )
}