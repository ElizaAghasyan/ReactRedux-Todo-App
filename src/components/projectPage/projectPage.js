import Button from '@material-ui/core/Button';
import './projectPage.scss';

const ProjectPage = () => {
    return (
        <div className="projectPage">
            <h2 className="projectPage-title">You can create your projects here</h2>
            <Button variant="outlined" className="btn">Create Project</Button>
        </div>
    );
}

export default ProjectPage;
