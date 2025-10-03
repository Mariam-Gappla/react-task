import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white shadow-md">
      <div className="text-2xl font-bold">
        MyLogo
      </div>

      <nav>
        <ul className="flex gap-6">
          <li>
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-blue-400 transition">Products</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
