import Navbar from "./components/navbar/Navbar"
import Cart from './components/home/Cart';
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer"
// import LoginPage from "./components/Login";
// import RegisterPage from "./components/Register";

function App() {
  

  return (
    <>
<Navbar/>
<Cart />
<Home />
{/* <RegisterPage /> */}
{/* <LoginPage /> */}
<Footer/>
    </>
  )
}

export default App