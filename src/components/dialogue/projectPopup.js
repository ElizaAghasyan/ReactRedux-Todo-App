import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch } from 'react-redux';
import { addTodo } from "../../redux/todoSlice";

import { makeStyles } from '@material-ui/core/styles';
import './projectPopup.scss';

const useStyles = makeStyles({
    btnUI: {
        color: "#8187ea",
        border: "none",
        backgroundColor: "#f3f4fc",
        opacity: 0.7,

        "&:hover": {
            opacity: 1
        }
    },
});

const ProjectPopup = ({modal, toggle}) => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSave = () => {
        dispatch(addTodo({
            title: title,
            description: description,
        }));
        setTitle('');
        setDescription('');
        toggle(!modal)
    }

    return (
        <Dialog open={modal} onClose={toggle} className="dialogue">
            <DialogTitle className="dialogue-title">CREATE PROJECT</DialogTitle>
            <DialogContent>
                <div className="dialogue-form">
                    <label className="dialogue-form-label">PROJECT NAME</label>
                    <input
                        type="text"
                        className="dialogue-form-input"
                        onChange={((e) => setTitle(e.target.value))}
                    />
                </div>
                <div className="dialogue-form">
                    <label className="dialogue-form-label">PROJECT DESCRIPTION</label>
                    <textarea
                        rows="5"
                        className="dialogue-form-input"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="outlined"
                    className={classes.btnUI}
                    onClick={handleSave}
                >
                    Cancel
                </Button>
                <Button
                    variant="outlined"
                    className={classes.btnUI}
                    onClick={toggle}
                >
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ProjectPopup;
