import './App.css';
import Header from './components/header/Header.jsx';
import Container from './components/container/Container.jsx';
import Route from './modules/Route.js';
import { useState, useEffect, useCallback } from 'react';


function App() {
  /**
   * dropdown value relative
   * components: Header, Menu, ...
   */
  let [currentPath, setCurrentPath] = useState('/');
  let [edit, setEdit] = useState(false);
  let curEditMode = localStorage.getItem('edit') === 'true';

  const setPath = useCallback(async () => {
    let r = new Route();
    setCurrentPath(r.getUrl())
  }, []);

  useEffect(
    () => {setPath()}, [setPath]
  )

  if(curEditMode != true) {
    toggleEdit();
  }

  function toggleEdit() {
    let value = edit === true ? false : true;
    localStorage.setItem('edit', value);
    setEdit(value);
  }

  return (
    <div className="App">
      <Header curPath={currentPath} editMode={toggleEdit} edit={edit}/>

      <Container curPath={currentPath} edit={edit}></Container>
    </div>
  );
}

export default App;
