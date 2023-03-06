

function Navbar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <ul className="nav navbar-nav flex-row justify-content-between ml-auto">
                <li className="nav-item order-2 order-md-1"><a href="#" className="nav-link" title="settings"><i className="fa fa-cog fa-fw fa-lg"></i></a></li>
                <li className="dropdown order-1">
                    <button type="button" id="dropdownMenu1" data-toggle="dropdown" className="btn btn-outline-secondary dropdown-toggle">Login <span className="caret"></span></button>
                    <ul className="dropdown-menu dropdown-menu-right mt-1">
                      <li className="p-3">
                            <form className="form" role="form">
                                <div className="form-group">
                                    <input id="emailInput" placeholder="Email" className="form-control form-control-sm" type="text" ></input>
                                </div>
                                <div className="form-group">
                                    <input id="passwordInput" placeholder="Password" className="form-control form-control-sm" type="text"></input>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                                </div>
                                <div className="form-group text-xs-center">
                                    <small><a href="#">Forgot password?</a></small>
                                </div>
                            </form>
                        </li>
                    </ul>
                </li>
            </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
