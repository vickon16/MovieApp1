import { Routes, Route } from "react-router-dom";
import {Footer, Header} from "./components";
import { Home, MovieDetail, NotFound } from "./pages"
import "./App.css";

function App() {
  return (
    <div className="App w-full h-full">
      <Header />
      <main className="container px-3 py-6 mx-auto">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
