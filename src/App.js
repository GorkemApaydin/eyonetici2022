import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Panel from './components/panel';
import Footer from './components/footer';

export default function App() {

    return (
      <>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <Panel />
            </div>
            <Footer />
          </div>
        </div>
      </>
    )
}
