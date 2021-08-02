import React, { useState } from 'react';
import Header from './components/header/header';
import Dialogue from './components/dialogue/dialogue';
import ProjectPage from './components/projectPage/projectPage';
import Footer from './components/footer/footer';

const App = () =>  {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <div className="App">
            <Header />
            <Dialogue modal={modal} toggle={toggleModal} />
            <ProjectPage  toggle={toggleModal} />
            <Footer />
        </div>
    );
}

export default App;
