import { useState } from "react";
import { BlPlanWrap } from "./Home.styled";

const data = [
  {
    packTitle: "Validity",
    pack: ["1", "3", "7"],
  },
  {
    packTitle: "Internet",
    pack: ["0 MB", "205 MB", "500 MB"],
  },
  {
    packTitle: "Minutes",
    pack: ["0", "10", "25"],
  },
  {
    packTitle: "SMS",
    pack: ["0", "50", "100"],
  },
];

const HomeComponent = () => {
  const [validity, setValidity] = useState();
  const [internet, setInternet] = useState();
  const [minutes, setMinutes] = useState();
  const [SMS, setSMS] = useState();
  return (
    <BlPlanWrap className="blPlanWrap">
      <div className="container">
        <h4>Banglalink Offer</h4>
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-12 col-12">
            {data.map((dataItem: any, k: number) => (
              <div key={k} className="planContent">
                <div className="row">
                  <div className="col-5">
                    <h3>{dataItem.packTitle}</h3>
                    <p>3 Days</p>
                  </div>
                  <div className="col-7">
                    <div className="packItemWrap">
                      {dataItem.pack.map((item: any, i: number) => (
                        <div className="packItem" key={i + k}>
                          <input
                            name={dataItem.packTitle}
                            type="radio"
                            id={`item_${k}${i}`}
                          />
                          <label htmlFor={`item_${k}${i}`} className="packData">
                            {item}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="Total">
            <div className="right-sidebar-container">
              <div className="right-sidebar">
                <div>
                  <h2 className="myob_bonus_num">
                    <span id="discount-amount">10</span>
                    <span className="myob_percent">%</span>
                  </h2>
                  <h6 className="myob_bonus_text">Savings</h6>
                </div>
              </div>
              <div className="sidebar-purchage">
                <div id="myob_bttom_stky_left">
                  <div className="myob_sidebar">
                    <p className="flxpln-sml-terms">Total Price</p>
                    <p>
                      ৳ <span id="bundle-price">18.00</span>
                    </p>
                    <p className=" purchase_title">
                      <span className="longevity">1 Days</span>
                      <span className="voice">25 Min</span>
                      <span className="internet">0 MB</span>
                      <span className="fourg">0 MB 4G Only </span>
                      <span className="bioscope">0 MB Bioscope </span>
                      <span className="sms">0 SMS</span>
                    </p>
                  </div>
                </div>
                <button className="btn btn-flexiplan">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlPlanWrap>
  );
};

export default HomeComponent;
