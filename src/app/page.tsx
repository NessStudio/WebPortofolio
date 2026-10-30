import Portfolio from "../components/Portfolio";
import Stage from "../components/Stage";

export default function Page() {
  return (
    <Portfolio>
      <div id="app">
        <Stage theme="l" />
        <Stage theme="d" />
      </div>
    </Portfolio>
  );
}
