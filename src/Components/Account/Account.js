import React from "react";
import "./Account.css";

import { useNavigate } from 'react-router-dom';


function Account() {
  const navigate = useNavigate();

  const handleClick = () => {
     navigate('/otp');
  };


  return (
    <div>
      <div className="account  pb-5">
        <div className="account-heading">
          <h3 className="py-3 text-center pe-5">
            Wellcome to GoKhana
          </h3>
          <div className="signin">
            <form className="loginForm">
              <div class="mb-3">
                <label for="username" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="username"
                  name="username"
                  placeholder="User name"
                />
              </div>
              <div class="mb-3">
                <label for="Phone" class="form-label">
                  phone number
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="number"
                  name="number"
                  placeholder="Phone Number"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="Email Id"
                />
              </div>

              <div className="login-desc pt-4 pb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked"
                    checked
                  />
                  <label class="form-check-label" for="flexCheckChecked">
                    Ihave read and agree to the{" "}
                    <span className="text-primary">privacy policy</span> and{" "}
                    <span className="text-primary">term and conditions</span>
                  </label>
                </div>
              </div>

              <div className="buton">
                <button
                  type="submit"
                  class="btn text-center btn-md btn-warning  mt-4 ps-5 pe-5"
                  onClick={handleClick} >

                  Get OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
