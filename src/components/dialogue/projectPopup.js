import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import './projectPopup.scss';

const ProjectPopup = ({ modal, toggle }) => {
    const [title, setTitle ] = useState();
    const [description, setDescription ] = useState();

    return (
        <Dialog open={modal} onClose={toggle} className="dialogue">
            <DialogTitle className="dialogue-title">CREATE PROJECT</DialogTitle>
            <DialogContent>
                <div className ="dialogue-form">
                    <label className="dialogue-form-label">PROJECT NAME</label>
                    <input
                        type="text"
                        className="dialogue-form-input"
                        onChange={((e) => setTitle(e.target.value))}
                    />
                </div>
                <div className = "dialogue-form" >
                    <label className="dialogue-form-label">PROJECT DESCRIPTION</label>
                    <textarea
                        rows = "5"
                        className="dialogue-form-input"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="outlined"
                    className="btn"
                >
                    Save
                </Button>
                <Button
                    variant="outlined"
                    className="btn"
                    style={{color: "#8187ea"}}
                    onClick={toggle}
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ProjectPopup;
