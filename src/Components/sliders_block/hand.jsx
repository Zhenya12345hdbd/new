 import { comment_data } from "./comment_data/comment_data"
 let count=1


 export function click_up(){
    let all_block = document.querySelector('.slider')
        if(count < Object.keys(comment_data).length)
           
        count++
        all_block.scrollBy({

            left: 600,
            behavior:"smooth"
        })
        console.log(count);
        if (count >= Object.keys(comment_data).length) {
            let right = document.querySelector('.right')
            let rightArrow = document.querySelector('.arrow_right')
            let rightLine = document.querySelector('.line_right')
            right.classList.add('right_end')
            rightArrow.classList.add('right_arrow_end')
            rightLine.classList.add('right_line_end')

            console.log('yes');
        }
        

    }
    
    export function click_down(){
        if (count > 1){
              let all_block = document.querySelector('.slider')
        all_block.scrollBy({
            left: -600,
            behavior:"smooth"
        })
              count--
              console.log(count);
               let rightArrow = document.querySelector('.arrow_right')
            let rightLine = document.querySelector('.line_right')
            let right = document.querySelector('.right')
            right.classList.remove('right_end')
            rightArrow.classList.remove('right_arrow_end')
            rightLine.classList.remove('right_line_end')
            console.log('yes');
        
              
        }
    }

    


 
