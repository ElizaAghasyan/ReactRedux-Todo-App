import { useParams } from 'react-router-dom';

import './todoItem.scss';

const TodoItem = () => {
    let { id } = useParams();

    return <div>
        <h1>Welcome Todo Item ID: {id} </h1>
    </div>
}

export default TodoItem;
