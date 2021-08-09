import { useSelector } from 'react-redux';
import ProjectItem from '../projectItem/projectItem';

import './projectList.scss';

const ProjectList = () => {
    const todos = useSelector(state => state.todos);

    return (
        <div className="projectList-container">
            {todos.map((todo) => {
                return (
                    <ProjectItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        description={todo.description}
                    />
                );
            })}
        </div>
    );
}

export default ProjectList;
