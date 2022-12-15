import { Button, Form, Row } from "react-bootstrap";
import { PageHeaderWithOutButton } from '../../../../Components/PageHeader/index';
import { useForm } from "react-hook-form";
import styles from '../../styles.module.css';


export default function Statistics():JSX.Element {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);


    return (
        <>
            <section className="content-wrapper">
                <PageHeaderWithOutButton header="Sagacity Statistics"/>
                <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Show Statistics For</legend>
                    <div className={styles.formFields}>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Group By</Form.Label>
                                <Form.Select {...register("GroupBy")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Business Unit</Form.Label>
                                <Form.Select {...register("BusinessUnit")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Start Date</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("StartDate")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Authenticate Response Id</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("EndDate")}/>
                            </Form.Group>
                        </Row>
                        <Row className={styles.btnContainer}>
                            <Button className="col-sm-2" type="submit">Filter</Button>
                            <Button className="col-sm-2" type="button">Clear</Button>
                        </Row>
                    </div>
                </Form>

                {/* This page will need more detailed work */}
            </section>
        </>
    )
}