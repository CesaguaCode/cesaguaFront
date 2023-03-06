import { useState } from "react";
import CardVM from "./CardVM";
import MVData from "./MisionVision.json";

export default function MisionVision() {
  const [icon, setIcon] = useState(<i className="fa-solid fa-angle-down"></i>);
  const [flag, setFlag] = useState(true);

  const set = () => {
    if (flag) {
      setIcon(<i className="fa-solid fa-angle-up"></i>);
      setFlag(false);
    } else { 
      setIcon(<i className="fa-solid fa-angle-down"></i>);
      setFlag(true);
    }
  };

  return (
    <div id="accordion">
      <div className="card bg-gray">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <div
              onClick={set}
              className="btn btn-block p-1 d-flex justify-content-center"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h4 className="">Vision & Mision {icon}</h4>
            </div>
          </h5>
        </div>
      </div>
      <div
        id="collapseOne"
        className="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div className="card-body">
          <div className="container-fluid" style={{ color: "white" }}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <CardVM
                  type={MVData[0].type}
                  text={MVData[0].text}
                  color={MVData[0].color}
                ></CardVM>
              </div>
              <div className="col-sm-12 col-md-6">
                <CardVM
                  type={MVData[1].type}
                  text={MVData[1].text}
                  color={MVData[1].color}
                ></CardVM>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
