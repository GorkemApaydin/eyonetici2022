export default function EkBilgiler() {
  return (
    <>
      <div className="col-xl-6 col-lg-6">
        <div className="card shadow mb-4">
          <div
            className="card-header py-3 d-flex flex-row align-items-center justify-content-between"
          >
            <h6 className="m-0 font-weight-bold text-primary">
              Ek Bilgiler
            </h6>
          </div>
          <div className="card-body" style={{'padding-bottom': '34px'}}>
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Vergi Dairesi</th>
                    <th>Vergi Numarası</th>
                    <th>Elektrik Abone No</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Yeğenbey V.D.</td>
                    <td>123 456 78</td>
                    <td>123</td>
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