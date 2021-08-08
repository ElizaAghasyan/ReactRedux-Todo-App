import React, { useState } from 'react';
import Header from './components/header/header';
import ProjectPopup from './components/dialogue/projectPopup';
import ProjectPage from './components/projectPage/projectPage';
import Footer from './components/footer/footer';
import ProjectList from './components/projectPage/projectList/projectList'

const App = () =>  {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <div className="App">
            <Header />
            <ProjectPopup modal={modal} toggle={toggleModal} />
            <ProjectPage  toggle={toggleModal}>
                <ProjectList />
            </ProjectPage>
            <Footer />
        </div>
    );
}

export default App;
