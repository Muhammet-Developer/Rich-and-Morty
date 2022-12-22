import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo1 from "../assets/rickAndMort.png";
import Back from "../assets/back.png";
const Navbar = () => {
  const navstyle = {
    display: "flex",
    justifyContent: "space-between",
  };
  const back = () => {
    navigate(-1);
  };
  useEffect(() => {
    back();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <div style={navstyle}>
        {window.location.pathname !== "/" && (
          <img
            src={Back}
            className="back"
            alt="Navbar"
            onClick={() => back()}
          />
        )}
        {window.location.pathname === "/" && <div></div>}
        <Link to="/">
          <img src={Logo1} className="ricky" alt="Navbar" />
        </Link>
        <div></div>
      </div>
      <hr style={{ marginBottom: 10 }} />
    </>
  );
};

export default Navbar;
