import Header from "./Components/header/header";
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Footer from "./Components/footer/footer";
import Main from "./pages/main";
import About from "./pages/about";
import Blog from "./pages/blog";
import Item from "./pages/blog_post";
import Contact from "./pages/contact";
import Category from "./pages/category";
import Autors from "./pages/autors";
import Policy from "./pages/policy";



function App() {
  return (
  <div>
    <Header />
        <Routes>
          <Route  path="/" element={<Main />}/>
          <Route  path="/blog" element={<Blog />}/>

          <Route path="/item/:id" element={<Item/>}>
            
          </Route>
          <Route path="/about" element={<About />}/>
          <Route path="/autors/:path" element={<Autors />}/>
          <Route path="/:name" element={<Category />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/policy" element={<Policy />}/>
          

        </Routes>

    <Footer/>
  </div>
   
  );
}

export default App;
