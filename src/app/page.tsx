import Portfolio from "../components/Portfolio";
import Stage from "../components/Stage";
import Mobile from "../components/Mobile";
import Loader from "../components/Loader";

export default function Page() {
  return (
    <Portfolio>
      <Loader />
      {/* Desktop / tablet lebar: panggung 1440×900 yang di-scale */}
      <div id="app">
        <Stage theme="l" />
        <Stage theme="d" />
      </div>
      {/* HP & layar ≤ 820px: layout responsif (ditampilkan lewat CSS, lihat app/mobile.css) */}
      <Mobile />
    </Portfolio>
  );
}
