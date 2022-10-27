import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Page() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}

root.render(<Page />);
