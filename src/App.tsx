import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./Pages/Home/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default App;
