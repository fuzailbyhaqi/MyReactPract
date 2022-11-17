import { Link } from "react-router-dom";
let Header = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="tm-site-header">
          <div className="row">
            <div className="col-12 tm-site-header-col">
              <div className="tm-site-header-left">
                <i className="far fa-2x fa-eye tm-site-icon"></i>
                <h1 className="tm-site-name">New Vision</h1>
              </div>
              <div className="tm-site-header-right tm-menu-container-outer">
                <nav className="navbar navbar-expand-lg">
                  <button
                    className="navbar-toggler toggler-example"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent1"
                    aria-controls="navbarSupportedContent1"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="dark-blue-text">
                      <i className="fas fa-bars fa-1x"></i>
                    </span>
                  </button>

                  <div
                    className="collapse navbar-collapse tm-nav"
                    id="navbarSupportedContent1"
                  >
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item ">
                        <Link className="nav-link tm-nav-link" to={"/"}>
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link tm-nav-link" to={"/company"}>
                          Our Company
                        </Link>
                      </li>
                    
                      <li className="nav-item">
                        <Link className="nav-link tm-nav-link" to={"/contact"}>
                          Contact us
                        </Link>
                      </li>

                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
