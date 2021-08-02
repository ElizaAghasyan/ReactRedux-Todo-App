import Button from '@material-ui/core/Button';
import './projectPage.scss';

const ProjectPage = ( props ) => {
    return (
        <div className="projectPage">
            <h2 className="projectPage-title">YOU CAN CREATE YOUR PROJECTS HERE</h2>
            <Button
                variant="outlined"
                className="btn"
                onClick={props.toggle}
            >Create Project</Button>
        </div>
    );
}

export default ProjectPage;
