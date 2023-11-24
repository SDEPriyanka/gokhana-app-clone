import React from "react";
import "./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faObjectGroup } from "@fortawesome/free-solid-svg-icons";
import { faCutlery } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

    const handleClick = () => {
       navigate('/account');
    };
  return (
    <div>
      <div className="container">
        <div className="home-body ">
          <div className="row">
            <div className="col-md-6">
              <div className="food-court  card p-5 m-5"  onClick={handleClick}>
                <div className="food-court-logo">
                  <FontAwesomeIcon icon={faCutlery} />
                  {/* Other content */}
                </div>
                <div className="food-court-heading">
                  <b>Food Court</b>
                </div>
                <div className="food-court-desc">
                  <p>Brows across food courts and enjoy benefits</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="vending-machin card p-5 m-5">
                <div className="vending-gomachin-logo">
                  <FontAwesomeIcon icon={faObjectGroup} />
                  {/* Other content */}
                </div>
                <div className="vending-machin-heading">
                  <b>Vending Machin</b>
                </div>
                <div className="vending-machin-desc">
                  <p>Brows across food courts and enjoy benefits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
