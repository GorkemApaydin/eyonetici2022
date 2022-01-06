export default function haberDuyuru() {
  return(
    <>
      <div className="col-xl-6 col-lg-6">
        <div className="card shadow mb-4">
          <div
            className="card-header py-3 d-flex flex-row align-items-center justify-content-between"
          >
            <h6 className="m-0 font-weight-bold text-primary">
              Haber & Duyurular
            </h6>
          </div>
          <div className="card-body">
            <div className="card mb-2 border-left-primary">
              <div className="card-body">
                <b>Olağan Kat Malikleri Toplantısı</b> (05.01.2022)
              </div>
            </div>
            <div className="card mb-2 border-left-primary">
              <div className="card-body">
                <b>Çöp Toplama Saati Değişikliği</b> (05.01.2022)
              </div>
            </div>
            <div className="card mb-2 border-left-primary">
              <div className="card-body">
                <b>Isınma Bedellerindeki Değişiklik</b> (05.01.2022)
              </div>
            </div>
            <div className="card mb-2 border-left-primary">
              <div className="card-body">
                <b>Aidatların Son Ödeme Tarihi</b> (05.01.2022)
              </div>
            </div>
            <div className="card mb-2 border-left-primary">
              <div className="card-body">
                <b>Otopark Genişletme Çalışması</b> (05.01.2022)
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}