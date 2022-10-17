import { useState } from "react";
import { BlPlanWrap } from "./Home.styled";

const Validity = [
  { day: "1", isActive: true },
  { day: "3", isActive: false },
  { day: "7", isActive: false },
  { day: "15", isActive: false },
  { day: "30", isActive: false },
];

const dataPack = [
  {
    validity: 1,
    mbData: 0,
    mbName: "MB",
    min: 0,
    price: 0,
  },
  {
    day: 1,
    mbData: 100,
    mbName: "MB",
    min: 0,
    price: 0,
  },
  {
    day: 1,
    mb: "100MB",
    min: 0,
    price: 10.1,
    mrp: 15,
  },
  {
    day: 1,
    mb: "100MB",
    min: 0,
    price: 10.1,
    mrp: 15,
  },
];

const Internet = [
  "0",
  "100MB",
  "250 MB",
  "500 MB",
  "1 GB",
  "1.5 GB",
  "2.5 GB",
  "3.5 GB",
  "5 GB",
  "8 GB",
  "15 GB",
];
const Minutes = ["0", "10", "25", "50", "100", "150", "200", "300", "350"];
const SMS = ["0", "25", "50", "100", "200", "300"];

const HomeComponent = () => {
  const [validity, setValidity] = useState(1);
  const [internet, setInternet] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setisActive] = useState(false);
  const [sms, setSMS] = useState(0);

  const handleValidity = (e: any) => {
    setValidity(e.target.value);
    setisActive(validity === 1 ? true : false);
  };
  const handleInternet = (e: any) => {
    setInternet(e.target.value);
  };
  const handleMinutes = (e: any) => {
    setMinutes(e.target.value);
  };
  const handleSms = (e: any) => {
    setSMS(e.target.value);
  };

  return (
    <BlPlanWrap className="blPlanWrap">
      <div className="container">
        <h4>Banglalink Flexiplan</h4>
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-12 col-12">
            <div className="planContent">
              <div className="row">
                <div className="col-4">
                  <h3>Validity</h3>
                  <p>{validity} Days</p>
                </div>
                <div className="col-8">
                  <div className="packItemWrap">
                    {Validity.map((item: any, i: number) => (
                      <div className="packItem" key={i}>
                        <input
                          name="Validity"
                          type="radio"
                          id={`item_${i}`}
                          value={item.day}
                          checked={true}
                          onChange={(e) => handleValidity(e)}
                        />
                        <label htmlFor={`item_${i}`} className="packData">
                          {item.day}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="planContent Internet">
              <div className="row">
                <div className="col-4">
                  <h3>Internet</h3>
                  <p>
                    <small>Regular</small>
                  </p>
                  <p>{internet}</p>
                </div>
                <div className="col-8">
                  <div className="packItemWrap">
                    {Internet.map((item: any, i: number) => (
                      <div className="packItem" key={i}>
                        <input
                          name="Internet"
                          type="radio"
                          id={`Internet_${i}`}
                          value={item}
                          onChange={(e) => handleInternet(e)}
                        />
                        <label htmlFor={`Internet_${i}`} className="packData">
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="planContent Minutes">
              <div className="row">
                <div className="col-4">
                  <h3>Minutes</h3>
                  <p>{minutes} Min</p>
                  <p>
                    <small>
                      <small>Any local Number</small>
                    </small>
                  </p>
                </div>
                <div className="col-8">
                  <div className="packItemWrap">
                    {Minutes.map((item: any, i: number) => (
                      <div className="packItem" key={i}>
                        <input
                          name="Minutes"
                          type="radio"
                          id={`Minutes_${i}`}
                          value={item}
                          onChange={(e) => handleMinutes(e)}
                        />
                        <label htmlFor={`Minutes_${i}`} className="packData">
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="planContent SMS">
              <div className="row">
                <div className="col-4">
                  <h3>SMS</h3>
                  <p>{sms} SMS</p>
                </div>
                <div className="col-8">
                  <div className="packItemWrap">
                    {SMS.map((item: any, i: number) => (
                      <div className="packItem" key={i}>
                        <input
                          name="sms"
                          type="radio"
                          id={`sms_${i}`}
                          value={item}
                          onChange={(e) => handleSms(e)}
                        />
                        <label htmlFor={`sms_${i}`} className="packData">
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
