import { useState } from 'react';
import Header from './components/header/header';
import ProjectPopup from './components/dialogue/projectPopup';
import ProjectPage from './components/projectPage/projectPage';
import Footer from './components/footer/footer';
import { Route, Switch } from 'react-router-dom';
import TodoItem from './components/projectPage/todoList/todoItem';

const App = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <div className="App">
            <Header />
            <ProjectPopup modal={modal} toggle={toggleModal} />
            <Switch>
                <Route path="/" exact>
                    <ProjectPage toggle={toggleModal} />
                </Route>
                <Route path="/projects/:id" component={TodoItem} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
