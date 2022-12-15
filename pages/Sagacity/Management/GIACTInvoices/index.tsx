import { Button, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { PageHeaderWithButton } from "../../../../Components/PageHeader";
import styles from '../../styles.module.css';


export default function GIACTInvoices():JSX.Element {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);


    return (
        <>
            <section className="content-wrapper">
                <PageHeaderWithButton header="GIACT Invoices Index" link="/" text="Ad New GIACT Invoice"/>
            </section>
        </>
    )
}