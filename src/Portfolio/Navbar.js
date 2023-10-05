import './Navbar.css';

function Navbar() {
    return (
        <div>


            <div className='bg-[#2E8B57] p-4'>
                <div className='max-w-[1240px] py-[12px] items-center flex justify-between mx-auto'>
                    <div className='text-3xl font-bold'> MY PORTFOLIO</div>
                    <ul className=' hidden md:flex text-white gap-10'>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>PROJECT</li>
                        <li>SKILLS</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </div>



        </div>


    );
}

export default Navbar;