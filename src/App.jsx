import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import ProjectDetails from "./Pages/Projectdetails";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import MainLayout from "./layout/mainLayout";


const App = () => {

  return (
  
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
   
  );
};

export default App;