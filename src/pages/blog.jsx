import First_blog from "../Components/first_blog/first_blog";
import Blog_all_item from "../Components/blog_all_item/blog_all_item";
import Choose from "../Components/choose/choose";
import Join from "../Components/join/join";

function Blog() {
   window.scrollTo(0, 0)
  return (
  <div>
    <First_blog/>
    <Blog_all_item/>
    <Choose />
    <Join/>
    
  </div>
   
  );
}

export default Blog;
