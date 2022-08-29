import {Row,Col} from 'react-bootstrap'
import { memo } from 'react';
const Header = memo(({tittle}) => {
    return ( 
        <Row>
            <Col>
             <h1 className='text-center'>{tittle}</h1>
            </Col>


        </Row>
     );
})
 
export default Header;