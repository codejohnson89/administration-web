import { Button, Form, Row } from "react-bootstrap";
import { PageHeaderWithOutButton } from './../../../../Components/PageHeader/index';
import { useForm } from "react-hook-form";
import styles from '../../styles.module.css';


export default function Bulwark():JSX.Element {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);


    return (
        <>
            <section className="content-wrapper">
                <PageHeaderWithOutButton header="Find SDN Matches" />
                <p>A Match Entry refers to a specific instance where a person on the SDN watch list attempted to process a transaction through the Colonnade system.</p>
                <p>If you want to check a specific name to see whether it matches against the SDN watch list, use the <a href="#">Check Name</a> form.</p>
                <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Filter Matches Against SDN List</legend>
                    <div className={styles.formFields}>
                    <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Matched After Date</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("MatchedAfterDate")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Matched Before Date</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("MatchedBeforeDate")}/>
                            </Form.Group>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Match Status</Form.Label>
                                <Form.Select {...register("MatchStatus")}>
                                    <option value="">Any</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>SDN Last Name</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("SDNLastName")}/>
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