export default function Eposta() {

  const style = {
    'float': 'right',
    'marginTop': '-4px',
    'background': 'white',
    'border': '0',
    'color': 'darkslategray'
  }

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="px-3 py-3 mb-4 bg-gradient-success text-white">
            <i className="fas fa-leaf mr-2"></i>
            Bilgilendirmeler E-posta olarak gelsin.
            <a
              href="#n"
              className="btn btn-primary btn-icon-split btn-sm ml-2"
              style={style}>
              <span className="icon text-gray-50-">
                <i className="fas fa-check"></i>
              </span>
              <span className="text">Kabul Et</span>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}