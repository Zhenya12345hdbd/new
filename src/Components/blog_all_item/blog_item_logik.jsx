import { blog_item_data } from "./blog_item_data"
let count= 1


 export function click_right(){

    let all_block = document.querySelector('.blog_slider')
    console.log(document.querySelector('.blog_slider').offsetWidth)
    if (count < Math.ceil(Object.keys(blog_item_data).length/4)){
        count++
        document.querySelector('.blog_left').classList.remove('blog_active')
        
       all_block.scrollBy({

            left: 1280,
            behavior:"smooth"
        })
    if (count >= Object.keys(blog_item_data).length/4) {

            document.querySelector('.blog_right').classList.add('blog_active')
            
        }
    }
    
      
    
 }
    
    export function click_left(){
        if (count > 1 ){
        let all_block = document.querySelector('.blog_slider')
         count--
         document.querySelector('.blog_left').classList.remove('blog_active')
        all_block.scrollBy({

            left: -1280,
            behavior:"smooth"
        })
       
        
    }
     if (count == 1){
            document.querySelector('.blog_left').classList.add('blog_active')
        }
        
      console.log(count) 
     document.querySelector('.blog_right').classList.remove('blog_active')
              
        
    }

    


 
