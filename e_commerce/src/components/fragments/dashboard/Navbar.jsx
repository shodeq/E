import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <nav className="flex justify-between p-5">
          <div>
              <Link to={"/"}>Home</Link>
          </div>
          <div className="flex gap-5">
              <Link to={"/dashboard"}>Dashboard</Link>
              <Link to={"/dashboard/product"}>Product</Link>
              <Link to={"/dashboard/create"}>Create</Link>
          </div>
      </nav>
    )
  }