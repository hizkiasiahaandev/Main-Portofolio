import Aboutpage from "./pages/About";
import Footerpage from "./pages/Footer";
import Homepage from "./pages/Home";
import Navbar from "./pages/Navbar";
import Projectpage from "./pages/Project";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-gray-50"
    >
      <Navbar />
      <Homepage />
      <Aboutpage />
      <Projectpage />
      <Footerpage />
    </div>
  );
};

export default App;

