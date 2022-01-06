export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"
      >
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>
        <ul className="navbar-nav ml-auto">
          <li class="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle"
              href="#n"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-3 d-none d-lg-inline text-gray-600 small"
              >Görkem Apaydın</span
              >
              <img
                className="img-profile rounded-circle"
                src="img/undraw_profile.svg" alt=""
              />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href="#n">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profil Ayarları
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#n">
                <i
                  className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"
                ></i>
                Çıkış Yap
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
