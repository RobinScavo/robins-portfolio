import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';
import SmallHeader from './components/smallHeader/SmallHeader';
import Footer from './components/footer/Footer';
import Project from './components/project/Project';
import Detail from './components/detail/Detail'

import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={
            <div className='main-page'>
              <Header />

              <Project content='bpm' />
              <Project content='cc' />
              <Project content='oe' />
              <Project content='port' />
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

              <Detail content='cc'/>
            </div>
          }/>

          <Route path='/color-crusher' element={
            <div className='detail-page'>
              <SmallHeader />

              <Detail content='oe'/>
            </div>
          }/>

          <Route path='/portfolio' element={
            <div className='detail-page'>
              <SmallHeader />

              <Detail content='port'/>
            </div>
          }/>
        </Routes>

        <SmallHeader />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
