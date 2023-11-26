import React, { useEffect, useState } from "react";
import { Spinner } from "reactstrap";
import "./App.css";
import Header from "./Layouts/Header";
import Main from "./Layouts/Main";
import Footer from "./Layouts/Footer";
import fakeData from "./sahte-veri";
import axios from "axios";

function App() {
  const dateNow = new Date();

  const [data, setData] = useState(fakeData);
  const [date, setDate] = useState(dateNow.toISOString().slice(0, 10));
  console.log(data);
  useEffect(() => {
    setData(null);
    setTimeout(() => {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=AOrjOCj81fYxcoA76fqynX0vrTSVBLf6Qt8U8gsO&date=${date}`
        )
        .then((res) => setData(res.data));
    }, 2000);
  }, [date]);

  return (
    <div className="App">
      <Header date={date} setDate={setDate} />
      {data ? (
        <Main data={data} />
      ) : (
        <Spinner className="m-auto">Loading...</Spinner>
      )}
      <Footer />
    </div>
  );
}

export default App;
