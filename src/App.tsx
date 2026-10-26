import { useEffect, useState } from "react";
import Aboutpage from "./pages/About";
import Footerpage from "./pages/Footer";
import Homepage from "./pages/Home";
import Navbar from "./pages/Navbar";
import Projectpage from "./pages/Project";
import PageLoader from "./components/ui/common/PageLoader";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-gray-50">
      {loading ? (
        <PageLoader
          title="Hizkia Siahaan"
          subtitle="Welcome to my portfolio"
        />
      ) : (
        <>
          <Navbar />
          <Homepage />
          <Aboutpage />
          <Projectpage />
          <Footerpage />
        </>
      )}
    </div>
  );
}

export default App;