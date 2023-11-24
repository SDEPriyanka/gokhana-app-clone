import React from "react";
import "./Account.css";
import { useNavigate } from 'react-router-dom';


function Otp() {
    const navigate = useNavigate();

    const handleClick = () => {
       navigate('/corporatecode');
    };

  return (
    <div>
      <div className="account  pb-5">
        <div className="account-heading">
          <h3 className="py-3 text-center pe-5">
            Wellcome to GoKhana Foodcourt
          </h3>
          <div className="signin">
            <form className="loginForm">
              <div className="otp-block">
                <div class="container-fluid d-block">
                  <div class="p-3  text-center">
                    <div class="otp-field mb-3">
                      <input type="number"  />
                      <input type="number"  />
                      <input type="number"  />
                      <input type="number"  />
                      <input type="number"  />
                      <input type="number"  />
                    </div>

                    <button class="btn btn-primary mb-3">Verify</button>
                  </div>
                </div>
              </div>

              <div className="buton">
                <button
                  type="submit"
                  class="btn text-center btn-md btn-warning  mt-4 ps-5 pe-5"
                  onClick={handleClick}
                >
                  Validate OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;
