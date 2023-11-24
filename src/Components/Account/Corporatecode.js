import React from "react";
import "./Account.css";

function Corporatecode() {
  return (
    <div>
      <div className="corporatecode">
        <div className="corporatecode-heading">
          <h4 className="py-3 text-center pe-2">
            Enter Your <b>Corporate Code</b>
          </h4>
        </div>
        <div className="corporatecode-body">
          <form className="loginForm">
            <div class="mb-3">
              <label for="number" class="form-label">
                Enter Your Corporate Code
              </label>
              <input
                type="number"
                class="form-control"
                id="number"
                name="number"
                placeholder="Corporate Number"
              />
            </div>

            <div className="buton">
              <button
                type="submit"
                class="btn text-center btn-md btn-warning  mt-4 ps-5 pe-5"
              >
                Validate
              </button>
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
                  <span className="text-primary">
                    I don't have a corporatecode
                  </span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Corporatecode;
