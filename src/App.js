import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/header';
import SmallHeader from './components/smallHeader/smallHeader';
import Footer from './components/footer/footer';
import Project from './components/project/project';
import Detail from './components/detail/detail'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={
            <div className='main-page'>
              <Header />

              <Project content='bpm' />
              <Project content='openBook' />
              <Project content='colorCrusher' />
              <Project content='portfolio' />
            </div>
          } />

          <Route path='/billings-property-management' element={
            <div className='detail-page'>
              <SmallHeader />

              <Detail content='bpm'/>
            </div>
          }/>

          <Route path='/open-book' element={
            <div className='detail-page'>
              <SmallHeader />

              <Detail content='openBook'/>
            </div>
          }/>

          <Route path='/color-crusher' element={
            <div className='detail-page'>
              <SmallHeader />

              <Detail content='colorCrusher'/>
            </div>
          }/>

          <Route path='/portfolio' element={
            <div className='detail-page'>
              <SmallHeader />

              <Detail content='portfolio'/>
            </div>
          }/>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
