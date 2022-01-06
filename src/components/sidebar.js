export default function Sidebar() {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-text mx-3">E-Yönetici</div>
        </a>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Panel</span></a
          >
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Kişisel Bilgiler</div>

        <li className="nav-item">
          <a className="nav-link" href="#n">
            <i className="fas fa-lira-sign"></i>
            <span>Aktif Borçlarım</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#n">
            <i className="fas fa-coins"></i>
            <span>Tüm Borçlarım</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#n">
            <i className="fas fa-money-bill-wave"></i>
            <span>Güncel Ödemelerim</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#n">
            <i className="fas fa-tools"></i>
            <span>Arıza/Talep Bildirim</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#n">
            <i className="fas fa-users"></i>
            <span>Ziyaretçilerim</span>
          </a>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Bina Bilgileri</div>

        <li className="nav-item">
          <a className="nav-link" href="#n">
            <i className="fas fa-balance-scale"></i>
            <span>Bakiye Bilgileri</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#n">
            <i className="fas fa-fw fa-cog"></i>
            <span>Gelir/Gider</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#n">
            <i className="fas fa-balance-scale-left"></i>
            <span>Borç/Alacak Listesi</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#n">
            <i className="fas fa-user-tie"></i>
            <span>Yönetici & Denetçi</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#n">
            <i className="fas fa-fw fa-cog"></i>
            <span>Forum</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#n">
            <i className="fas fa-comments"></i>
            <span>Mesaj</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#n">
            <i className="fas fa-book-open"></i>
            <span>İşlemler</span>
          </a>
        </li>
      </ul>
    </>
  );
}