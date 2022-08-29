import {Alert,Row,Col,Button} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

const pointer = {
 cursor: 'pointer'
}

const Item = ({id, work, deleteActivty}) => {
    const notify = () => toast("Eliminado elemento exitosamente👏");

    const deleteWork = (e) =>{
        
        const {id}=e.target;
        deleteActivty(id);
        notify;
    }

    
    return (
    <Alert key={id} variant={"secondary"} onSubmit>
        <Row className='justify-content-around'>
            <Col md={10}>
            <p>
            <input type='checkbox'/> {work}
            </p>
            </Col>
            <Col md={2}>
            <p style={pointer} id={id} onClick={deleteWork}> 🗑</p>
            <ToastContainer />
            </Col>
        </Row>
    
    </Alert>
      
    );
};
 
export default Item;