import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import shortid from "shortid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 
import './Create.css'

const Create = ({addActivity}) => {
    const notify = () => toast("Creado elemento exitosamente👏");

    const initialState = {
        id: "",
        work: "",
        state: false,
    };

    const handleWork = (e) =>{
        const {name, value} = e.target;
        setWork({
            ...work,
            [name]: value,
        });
    };

    const handledSubmit = (e) =>{
        e.preventDefault();
        const {work:task} = work;
        if(task.trim() === "") return;
        const workObject ={
            ...work,
            id: shortid(),
                };
                console.log(workObject);
                setWork(initialState);
                addActivity(workObject);
    }

    const [work, setWork] = useState(initialState);
    return ( 
    <>
    <h3 className="crea">Ingresar tarea✏</h3>

    <Form onSubmit={handledSubmit}>
        <Form.Group>
            <Form.Control type="text" name="work" value={work.work} onChange={handleWork}/>
        </Form.Group>
    <Button onClick={notify} style={{marginTop: "20px"}} variant="primary" type="submit">
    Agregar tarea
    </Button>
    <ToastContainer />
    </Form>
    
    </>
    );
}
 
export default Create;