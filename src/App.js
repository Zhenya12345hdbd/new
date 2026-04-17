import Header from "./Components/header/header";
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Footer from "./Components/footer/footer";
import Main from "./pages/main";
import About from "./pages/about";
import Blog from "./pages/blog";
import Item from "./pages/blog_post";
import { blog_item_data } from "./Components/blog_all_item/blog_item_data";

function App() {
  return (
  <div>
    <Header />
        <Routes>
          <Route  path="/" element={<Main />}/>
          <Route  path="/blog" element={<Blog />}/>

          <Route path="/item/:id" element={<Item
          
          
          />}>
            

          </Route>
                        
              
          
          
          <Route path="/about" element={<About />}/>
           
                
            
          
        </Routes>

    <Footer/>
  </div>
   
  );
}

export default App;
