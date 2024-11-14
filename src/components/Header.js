import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='py-2 mb-10 border-b'>
      <div className='container mx-auto flex justify-between items-center'> 
        <Link to='/'>
          <img src="https://i.imgur.com/ToZMnh3.png" alt='logo' height={75} width={75} />
        </Link>
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-900 transition' to='/'>
            Log in
          </Link>
          <Link
            className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition'
            to='/'
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
