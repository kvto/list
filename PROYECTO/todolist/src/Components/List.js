import Item from "./Item";


const List = ({activity,deleteActivty}) => {
    return ( 
    <>
    {activity.length === 0 ? <h4>No hay tareas</h4> : ""}
    {activity.map((item) => (
    <Item key={item.id} {...item} deleteActivty={deleteActivty}/>
    ))}
    
    </>
    );
}
 
export default List;