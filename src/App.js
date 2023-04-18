import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Routes/Home';
import About from './Routes/About';
import Projects from "./Routes/Projects/Projects"
import ProjectDetails from "./Routes/Projects/ProjectDetails"
import Service from "./Routes/Services/Service"
import ServiceList from "./Routes/Services/ServiceList"
import ServiceDetails from "./Routes/Services/ServiceDetails"
import Team from "./Routes/Pages/Team"
import Testimonial from "./Routes/Pages/Testimonial"
import FAQ from "./Routes/Pages/FAQ"
import PricingCard from "./Routes/Pages/PricingCard"
import CommingSoon from "./Routes/Pages/Commingsoon"
import Error404 from "./Routes/Pages/Error404"
import Blogs from "./Routes/Blogs/Blogs"
import BlogList from "./Routes/Blogs/BlogList"
import BlogDetails from "./Routes/Blogs/BlogDetails"
import Contact from "./Routes/Contact"
import Qoute from './Routes/Qoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Home' element={<Home/>} />
        <Route path="/Home/About" element={<About/>} />

        <Route path="/Home/Our_Projects" element={<Projects />} />
        <Route path="/Home/Our_Projects/Project_Details" element={<ProjectDetails/>} />

        <Route path='/Home/Our_Services' element={<Service/> }  />
        <Route path='/Home/Our_Service_List' element={ <ServiceList/> } />
        <Route path='/Home/Our_Services/Service_Details' element={ <ServiceDetails/> } />
        
        <Route path='/Home/Our_Team' element={<Team/> }  />
        <Route path='/Home/Testimonial' element={<Testimonial/> } />
        <Route path='/Home/FAQs' element={<FAQ/> } />
        <Route path='/Home/Pricing_Table' element={<PricingCard/> } />
        <Route path='/Home/Comming_Soon' element={<CommingSoon/> } />
        <Route path='/Home/404' element={<Error404/>} />

        <Route path='/Home/Blogs' element={<Blogs/> } />
        <Route path='/Home/Blogs/Blog_List' element={<BlogList/>} />
        <Route path='/Home/Blogs/Blog_Details' element={<BlogDetails/>} />

        <Route path='/Home/Contact_Us' element={<Contact/> } />
        <Route path='/Home/Get_Qoute' element={<Qoute/> } />

      </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
