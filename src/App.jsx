import { Banner } from "./components/Banner";
import { Login } from "./components/Login";
import { Nav } from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <div className="flex p-8 bg-UP-COLOR3 bg-opacity-10">
        <Login />
        <Banner />
      </div>
    </>
  );
}

export default App;
