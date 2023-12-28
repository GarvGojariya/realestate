import {Route,Routes } from 'react-router-dom'
import './App.css';
import Layout from './Layout/Layout';
import AboutUs from './Pages/AboutUs';
import Properties from './Pages/Properties';
import Services from './Pages/Services';
import Home from './Pages/Home';

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Layout><Home/></Layout>}/>
    <Route path='/aboutus' element={<Layout><AboutUs/></Layout>}/>
    <Route path='/properties' element={<Layout><Properties/></Layout>}/>
    <Route path='/Services' element={<Layout><Services/></Layout>}/>
    </Routes>
    </>
  );
}

export default App;
