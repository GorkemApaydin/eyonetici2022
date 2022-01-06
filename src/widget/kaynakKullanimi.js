export default function KaynakKullanimi() {

  const style = {
    "padding-bottom" : "29px"
  }

  return(
    <>
      <div className="col-xl-6 col-lg-6">
        <div className="card shadow mb-4">
          <div
            className="card-header py-3 d-flex flex-row align-items-center justify-content-between"
          >
            <h6 className="m-0 font-weight-bold text-primary">
              Kaynak Kullanımı
            </h6>
          </div>
          <div className="card-body" style={style}>
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
                    <th>Kaynak</th>
                    <th>Değer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>05.01.2022</td>
                    <td>Doğalgaz</td>
                    <td>800<sup>m3</sup></td>
                  </tr>
                  <tr>
                    <td>02.11.2021</td>
                    <td>Doğalgaz</td>
                    <td>1200<sup>m3</sup></td>
                  </tr>
                  <tr>
                    <td>03.09.2021</td>
                    <td>Doğalgaz</td>
                    <td>700<sup>m3</sup></td>
                  </tr>
                  <tr>
                    <td>05.08.2021</td>
                    <td>Su</td>
                    <td>800<sup>Ton</sup></td>
                  </tr>
                  <tr>
                    <td>11.06.2021</td>
                    <td>Su</td>
                    <td>200<sup>Ton</sup></td>
                  </tr>
                  <tr>
                    <td>21.05.2021</td>
                    <td>Su</td>
                    <td>100<sup>Ton</sup></td>
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