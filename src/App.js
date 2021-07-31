import React from 'react';
import Header from './components/header/header';
import ProjectPage from './components/projectPage/projectPage';
import Footer from './components/footer/footer';

import './App.scss';

const App = () =>  {
  return (
    <div className="App">
      <Header />
      <ProjectPage />
      <Footer />
    </div>
  );
}

export default App;
