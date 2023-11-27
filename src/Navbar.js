import React from "react";
import { useSelector } from "react-redux";
export default function Navbar(){
    const currentAmount = useSelector(state => state.amount.value)
    return(
<div>
 <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">State bank of India</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
      </ul>
      <div>
        <button disabled={false} className="btn btn-primary">Your balance: {currentAmount}₹</button>
      </div>
    </div>
  </div>
 </nav>
</div>
    )
}