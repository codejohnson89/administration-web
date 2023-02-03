import { Button, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { PageHeaderWithButton } from "../../../../Components/PageHeader";
import styles from '../../styles.module.css';
import Link from "next/link";

export default function Configure():JSX.Element{
    const  { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data:any) => console.log(data);

    return(
        <>
            <PageHeaderWithButton header="Configure " link="/" text="Configure" />
        </>
    )
}