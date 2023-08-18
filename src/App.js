import { BrowserRouter } from 'react-router-dom';
import './App.css';
import SignIn from './Components/SignIn/SignIn';
import { AuthProvider } from './Context/auth_context';
import RouteConfiguration from './Route/RouteConfiguration';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';

function App() {

  return (
    <div className="App">
     <AuthProvider>
      <Navbar/>
      <div  style={{minHeight:"40vh",padding:"30px 10%"}}>
      <BrowserRouter>
        <RouteConfiguration />
      </BrowserRouter>
      </div>  
      
      <Footer/>
     </AuthProvider>
    </div>
  );
}

export default App;
