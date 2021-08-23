import { Link } from 'react-router-dom';
import ProjectList from '../projectPage/projectList/projectList';

import Button from '@material-ui/core/Button';
import './projectPage.scss';

const styleLink = {
    textDecoration: 'none',
    color: '#8187ea'
}

const ProjectPage = (props) => {
    return (
        <div>
            <div className="projectPage">
                <h2 className="projectPage-title">You Can Create Your Projects Here</h2>
                <Button
                    variant="outlined"
                    className="btn"
                    onClick={props.toggle}
                >
                    <Link to={`/projects`} style={styleLink}>
                        Create Project
                    </Link>
                </Button>
            </div>
            <ProjectList />
        </div>
    );
}

export default ProjectPage;
