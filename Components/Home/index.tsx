import { BlPlanWrap } from "./Home.styled";

const data = [
  {
    packTitle: "Validity",
  },
  {
    packTitle: "4G 1 Internet",
  },
  {
    packTitle: "Minutes",
  },
  {
    packTitle: "Bioscope",
  },
  {
    packTitle: "SMS",
  },
];

const HomeComponent = () => {
  return (
    <BlPlanWrap className="blPlanWrap">
      <div className="container">
        <h4>BL Plan</h4>
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-12 col-12">
            {data.map((pack: any, k: number) => (
              <div key={k} className="planContent">
                <div className="row">
                  <div className="col-5">
                    <h3>{pack.packTitle}</h3>
                    <p>3 Days</p>
                  </div>
                  <div className="col-7">
                    <div className="packItemWrap">
                      {[1, 1, 1, 1, 1, 1, 1].map((item: any, i: number) => (
                        <div className="packItem" key={i + k}>
                          <input
                            name="day"
                            type="radio"
                            id={`item_day_${k}${i}`}
                          />
                          <label
                            htmlFor={`item_day_${k}${i}`}
                            className="packData"
                          >
                            0
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
              <div className="right-sidebar row">
                <div className="myob-color-stripe col-3">
                  <div>
                    <h2 className="myob_bonus_num">
                      <span id="discount-amount">10</span>
                      <span className="myob_percent">%</span>
                    </h2>
                    <h6 className="myob_bonus_text">Savings</h6>
                  </div>
                </div>
                <div className="sidebar-purchage col-9">
                  <div id="myob_bttom_stky_left">
                    <div className="myob_sidebar">
                      <p className="flxpln-sml-terms">Total Price</p>
                      <p>
                        {" "}
                        ৳ <span id="bundle-price">18.00</span>
                      </p>
                      <p className="myob_smll_device_selected_items purchase_title purchase_list order-seq-tw">
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
      </div>
    </BlPlanWrap>
  );
};

export default HomeComponent;
