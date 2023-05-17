import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TodoForm from './pages/TodoForm';
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      
      <Router>
      <div className='App'>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/add' element={<TodoForm />} />
          <Route exact path='/edit/:id' element={<TodoForm />} />
          
        </Routes>
        </div>
      </Router>
     
    

    </Provider>
    
  );
}

export default App;
