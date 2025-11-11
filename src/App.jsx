import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import ProjectDetails from "./pages/projectdetails";
import About from "./pages/about";
import Contact from "./pages/contact";
import MainLayout from "./layout/mainlayout";
import useScrollToTop from "./hooks/usescrolltotop";

const App = () => {
  useScrollToTop();

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainLayout>
  );
};

export default App;