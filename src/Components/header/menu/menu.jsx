import Button from "../button/button";

function Menu(menu) {
  const myStyles = {
      background: 'white',
  };
  return (
    
      <div className='menu'>
                    {menu.menu}
                    <Button style={myStyles} text={'Subscribe'}/>
             </div>
   
  );
}

export default Menu;