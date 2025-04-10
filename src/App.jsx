import React from "react";
import Sidebar from "./Components/Sidebar";
import CardList from "./Components/CardList";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Navbar />
        <CardList />
      </div>
    </div>
  );
};

export default App;
