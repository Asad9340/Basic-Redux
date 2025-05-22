import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-lg w-full">
      <div className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-3xl font-bold ">Logo</div>
        <div>
          <ul className="flex gap-4">
            <Link to='/' className="text-lg font-semibold">Counter</Link>
            <li className="text-lg font-semibold">Product</li>
          </ul>
        </div>
        <div>Profile</div>
      </div>
    </div>
  );
}

export default Navbar
