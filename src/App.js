import React from "react";
import Nav from "./Components/Navbar";
import Card from "./Components/Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <div>
      <Nav />
      {cards}
    </div>
  );
}
