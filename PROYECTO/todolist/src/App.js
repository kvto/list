import { useState } from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import List from './Components/List';
import Create from './Components/Create';
import Header from './Components/Header';
import "./App.css";
function App() {

  const [activity, setActivity] = useState([]);

  const addActivity = (activitys) =>{
    setActivity([...activity,activitys]);
  }

  const deleteActivty = id =>{
    const newActivities = activity.filter((activity) => activity.id !== id);
    setActivity(newActivities);
  }
  return (
    <Container className="container"> 
      <Header tittle={"Lista📝📝"}/>
      <Row className="justify-content-center">
        <Col md={6}>
        <Create addActivity={addActivity}/>
        </Col>
        </Row>
        <Row className="mt-5 justify-content-center">
        <Col md={6}>
        <List activity={activity} deleteActivty={deleteActivty}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
