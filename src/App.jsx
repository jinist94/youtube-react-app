import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SearchHeader from "./components/SearchHeader";
import Sidebar from "./components/Sidebar";

function App() {
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDrVYSIbiin-WBisFh6G5HjDMzH31Yj7-k",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => console.log(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div>
      <SearchHeader />
      <Sidebar />
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
