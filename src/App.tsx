import Aboutpage from "./pages/About";
import Homepage from "./pages/Home";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50"
    >
      <Navbar />
      <Homepage />
      <Aboutpage />
    </div>
  );
};

export default App;

