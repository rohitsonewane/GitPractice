
import './App.css';
import Marshmallow from './Marshmallow.png'
import './Navbar.css';

function App() {
  return (
    <div>


         <div className='bg-[#9400D3] p-4'>
         <div className='max-w-[1240px] py-[12px] items-center flex justify-between mx-auto'>
          <div className='text-3xl font-bold'>GALLERY</div>
          <ul className=' hidden md:flex text-white gap-10'>
            <li>ABOUT ME</li>
            <li>SERVEICES</li>
            <li>COMPANY</li>      
            <li>CONTACT</li>
            <li>HELP CENTER</li>
          </ul>
         </div>
         </div>

         <div>
          <img src={Marshmallow} alt="aadslfkj" />
          
         </div>

    </div>

    
  );
}

export default App;
