export default function EnerjiKullanimVerileri() {
  
  const style = {
    'width': '100%', 
    'text-align': 'center'
  }

  return (
    <>
      <div className="col-xl-6 col-lg-6">
        <div className="card shadow mb-4">
          <div
            className="card-header py-3 d-flex flex-row align-items-center justify-content-between"
          >
            <h6 className="m-0 font-weight-bold text-primary">
              Enerji Kullanım Verileri
            </h6>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Tarih</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="dropdown">
                        <button
                          className="btn btn-primary dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          style={{'width' : '100%'}}
                        >
                          Tarih Seçin
                        </button>
                        <div
                          className="dropdown-menu animated--fade-in" aria-labelledby="dropdownMenuButton" style={style}>
                          <a className="dropdown-item" href="#n"
                          >05.01.2022</a>
                          <a className="dropdown-item" href="#n"
                          >05.12.2021</a>
                          <a className="dropdown-item" href="#n"
                          >05.11.2021</a>
                          <a className="dropdown-item" href="#n"
                          >05.10.2021</a>
                          <a className="dropdown-item" href="#n"
                          >05.19.2021</a>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}