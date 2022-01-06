import Eposta from "../widget/eposta"
import UstBorclar from "../widget/ustBorclar"
import HaberDuyuru from "../widget/haberDuyuru"
import KaynakKullanimi from "../widget/kaynakKullanimi"
import EnerjiKullanimVerileri from "../widget/enerjiKullanimVerileri"
import EkBilgiler from "../widget/ekBilgiler"

export default function Panel() {
  return (
    <>
      <div className="container-fluid">
        <Eposta />
        <UstBorclar />
        <div class="row">
          <HaberDuyuru />
          <KaynakKullanimi />
          <EnerjiKullanimVerileri />
          <EkBilgiler />
        </div>
      </div>
    </>
  )
}