import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand mx-5" href="#">
          BOOLFLIX
        </a>
        <button
          className="navbar-toggler mx-5"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline displaynavbar ms-auto mx-4 my-2 my-lg-0">
            <input
              className="form-control mx-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand ms-3" to="/">
          Store Name
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/Products">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" to="/About-us">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav> */}
    </>
  );
}

/*
      <header className="bg-light mb-3 p-3 d-flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/About-us">About Us</NavLink>
      </header>*/
