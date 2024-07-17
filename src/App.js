// import ClassComponent from './classComponent';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/NavbarComponent';
import HomeComponent from './components/Home/HomeComponent';
import AboutComponent from './components/About/AboutComponent';
import ShopComponent from './components/Shop/ShopComponent';
import ProductComponent from './components/Product/ProductComponent';
import ConatactComponent from './components/Contact/ConatactComponent';
import LoginComponent from './components/Login/LoginComponent';
import SignUpCompoenet from './components/Signin/SignUpCompoenet';
import EventRegistration from './components/EventRegistration/EventRegistration';
// import ParentComponent from './components/ParentComponent';
// import AbhayaComponent from './components/props/AbhayaComponent';
// import GreetAbhayaComponent from './components/props/greetAbhayaComponent';
// import Counter from './counter';
// import Watch from './stopwatch';
// import CounterFunction from './components/Counter/counter_function';
// import GreetComponent from './components/props/greetComponent';

function App() {
  return (
    <>
    <Router>
        <Navbar/>
    <Routes>
      <Route path='/' element={<HomeComponent/>}/>
      <Route path='/about' element={<AboutComponent/>}/>
      <Route path='/shop' element={<ShopComponent/>}/>
      <Route path='/contact' element={<ConatactComponent/>}/>
      <Route path='/product' element={<ProductComponent/>}/>
      <Route path='/event' element={<EventRegistration/>}/>
      <Route path='/login' element={<LoginComponent/>}/>
      <Route path='/signup' element={<SignUpCompoenet/>}/>
    </Routes>
    </Router>
    {/* <ParentComponent/> */}
    {/* <GreetComponent/> */}
      {/* <CounterFunction/> */}
      {/* <Watch/> */}
      {/* <Counter/>
      <ClassComponent/> */}
      {/* <GreetAbhayaComponent/>
      <AbhayaComponent/> */}
      {/* <Navbar/> */}
    </>
    
  );
}

export default App;