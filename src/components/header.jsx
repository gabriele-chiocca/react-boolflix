export default function Header({ query, setQuery, handleSearch }) {
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
          <form className="form-inline displaynavbar ms-auto mx-4 my-2 my-lg-0 d-flex gap-2">
            <input
              className="form-control mx-sm-2"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
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
    </>
  );
}
