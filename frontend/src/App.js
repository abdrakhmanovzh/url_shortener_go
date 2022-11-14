import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ShortUrl from "./components/ShortUrl";
import Result from "./components/Result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        
        <Route exact path="/result:shortUrl" element={<Result/>}></Route>

        <Route exact path="/:shortUrl" element={<ShortUrl/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
