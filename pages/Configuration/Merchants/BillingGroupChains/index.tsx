import { Button, Form, Row } from "react-bootstrap";
import { PageHeaderWithButton } from './../../../../Components/PageHeader/index';
import { useForm } from "react-hook-form";
import styles from '../styles.module.css';

export default function BillingGroupChains() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);
    return ( 
        <>
            <PageHeaderWithButton header="Billing Group Chain" text="Add New Billing Group Chain" link="../../../Configuration/Merchants/BillingGroupChains/Create"/>
            <Form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <legend className={styles.legend}>Filter Billing Groups Chains By</legend>
                    <div className={styles.formFields}>
                        <Row>
                            <Form.Group className={["col-sm-4", styles.formInput].join(' ')}>
                                <Form.Label>Billing Group Chain</Form.Label>
                                <Form.Control className={styles.formInput} type="text" {...register("BillingGroupChain")}/>
                            </Form.Group>
                        </Row>
                        <Row className={styles.btnContainer}>
                            <Button className="col-sm-2" type="submit">Filter</Button>
                            <Button className="col-sm-2" type="button">Clear</Button>
                        </Row>
                    </div>
                </Form>
        </>
    )
}
