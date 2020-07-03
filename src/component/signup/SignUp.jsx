import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="main-div">
      <div className="first-div">
        <h4> Add An Address So You Can Get Paid</h4>
        <p>This will be used as your default business address.</p>
        <form className="form">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required /> <br />
          <input
            className="full-width"
            type="text"
            placeholder="Address"
            required
          />
          <br />
          <input
            className="full-width"
            type="text"
            placeholder="Apartment, suite, etc. (Optional) "
          />
          <br />
          <input type="text" placeholder="City Name" required />
          <input type="text" placeholder="ZIP / Postal Code" required /> <br />
          <input type="text" placeholder="Country / Region" required />
          <input type="text" placeholder="State" /> <br />
          <input type="text" placeholder="Phone Number" required />
          <input type="text" placeholder="yourwebsite.com" />
        </form>
      </div>
      <div className="second-div">
        <div className="inside-div">
          <h4>Hello, Friend!</h4>
          <p>Enter your personal details and start journey with us.</p>
          {/* <a href ="#google"><i class="fa fa-refresh fa-spin fa-3x fa-fw"></i></a> */}
          <a href ="#google"><i class="fa fa-google fa-spin fa-3x fa-fw"></i></a>
          <a href ="#google"><i class="fa fa-facebook"></i></a>
          <a href ="#google"><i class="fa fa-linkedin"></i></a>
        </div>
        <div className="button-div">
          <button className = "btn-1">Skip</button>
          <button className = "btn-2">Enter my store</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
