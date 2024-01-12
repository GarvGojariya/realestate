import { Route, Routes } from 'react-router-dom'
import './App.css';
import Layout from './Layout/Layout';
import AboutUs from './Pages/AboutUs';
import Properties from './Pages/Properties';
import Services from './Pages/Services';
import Home from './Pages/Home';
import ContactUs from './Pages/ContactUs';
import PropertyDetail from './Components/PropertyDetail';
import Reviews from './Pages/Reviews';
import TranslatedPage from './Pages/TranslatedPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout><Home /></Layout>} />
        <Route path='/aboutus' element={<Layout><AboutUs /></Layout>} />
        <Route path='/properties' element={<Layout><Properties /></Layout>} />
        <Route path='/services' element={<Layout><Services /></Layout>} />
        <Route path='/contactus' element={<Layout><ContactUs /></Layout>} />
        <Route path='/prop-detail' element={<Layout><PropertyDetail /></Layout>} />
        <Route path='/review-page' element={<Layout><Reviews /></Layout>} />
        <Route path='/translate-page' element={<Layout><TranslatedPage /></Layout>} />

      </Routes>
    </>
  );
}

export default App;
