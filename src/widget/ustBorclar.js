export default function ustBorclar(){
  return(
    <>
      <div className="row">
        <div className="col-xl-4 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div
                    className="text-xs font-weight-bold text-primary text-uppercase mb-1"
                  >
                    Aktif Borçlarım
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    ₺4,000
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-lira-sign fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div
                    className="text-xs font-weight-bold text-success text-uppercase mb-1"
                  >
                    Tüm Borçlarım
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    ₺12,000
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-coins fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div
                    className="text-xs font-weight-bold text-info text-uppercase mb-1"
                  >
                    Güncel Ödemelerim
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    ₺2,000
                  </div>
                </div>
                <div className="col-auto">
                  <i
                    className="fas fa-money-bill-wave fa-2x text-gray-300"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}