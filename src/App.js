import { Route, Routes } from 'react-router-dom';
import DisplayNote from './components/displayNote';
import Edit from './components/edit';
import Error from './components/error';
import LeftSide from './components/leftSide';
import Main from './components/main';
import './index.css'

function App() {
  return (
    <div className='global-container'>
      <div className="container-left">
        <LeftSide />
      </div>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/editer' element={<Edit />} />
        <Route path='/note/id' element={<DisplayNote />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
