import ProjectList from '../projectPage/projectList/projectList';

import Button from '@material-ui/core/Button';
import './projectPage.scss';

const ProjectPage = ( props ) => {
    return (
        <div>
            <div className="projectPage">
                <h2 className="projectPage-title">YOU CAN CREATE YOUR PROJECTS HERE</h2>
                <Button
                    variant="outlined"
                    className="btn"
                    onClick={props.toggle}
                >
                    Create Project
                </Button>
            </div>
            {props.children}
        </div>
    );
}

export default ProjectPage;
