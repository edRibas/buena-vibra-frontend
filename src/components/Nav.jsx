// Importing required images and data from external files or modules.
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

// Define the Nav component as a functional component.
const Nav = () => {
  return (

    // Start rendering the header element with specific CSS classes and styles.
    <header className='bg-black px-5 xl:py-7 absolute z-10 w-full'>

      <nav className='flex justify-between items-center max-container'>

        {/* Render the website logo as a link to the home page. */}
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={220}
            height={80}
            className='m-0 w-[220px] h-[80px]'
          />
        </a>

        {/* Render a list of navigation links for smaller screens. */}
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Render sign-in and explore links for smaller screens. */}
        <div className='flex gap-2 text-lg leading-normal font-medium max-lg:hidden wide:mr-24 text-white'>
          <a href='/'>Sign in</a>
          <span>|</span>
          <a href='/'>Explore the store</a>
        </div>

        {/* Render a hamburger icon for larger screens. */}
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={32} height={32} />
        </div>

      </nav>
    </header>
  );
};

// Export the Nav component as the default export of this module.
export default Nav;
