import React from "react";

const Home = ({ name }) => {
  return name ? <div className="homecls">{name}</div> : <div className="homecls">Home</div>
};

export default Home;
