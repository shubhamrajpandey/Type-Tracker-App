import { Link, NavLink } from "react-router-dom";

function Header({handleInput}) {
    
  
  return (
    <header className="bg-blue-700 text-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyWebsite</h1>
        <input
      type="text"
      placeholder="Search..."
      onChange={handleInput}
    />

        <nav className="space-x-6">
          <NavLink to="/" className={({isActive}) => `hover:underline ${isActive ? "text-black": "text-white"}`} >Home</NavLink>
          <NavLink to="/about" className={({isActive}) => `hover:underline ${isActive ? "text-black": "text-white"}`}>About</NavLink>
          <NavLink to="/services" className={({isActive}) => `hover:underline ${isActive ? "text-black": "text-white"}`}>Services</NavLink>
          <NavLink to="/contact" className={({isActive}) => `hover:underline ${isActive ? "text-black": "text-white"}`}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
