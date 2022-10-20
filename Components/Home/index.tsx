import { useState } from "react";
import { BlPlanWrap } from "./Home.styled";

const Validity = [
  {
    value: "1 day",
    id: 1,
    title: "",
  },
  {
    value: "3 days",
    id: 2,
    title: "",
  },
  {
    value: "7 days",
    id: 3,
    title: "",
  },
  {
    value: "15 days",
    id: 4,
    title: "",
  },
  {
    value: "30 days",
    id: 5,
    title: "",
  },
];

const Internet = [
  {
    value: "100MB",
    id: 10,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
  },
  {
    value: "3GB",
    id: 20,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
  },
  {
    value: "7GB",
    id: 30,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
  },
  {
    value: "15GB",
    id: 40,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
  },
  {
    value: "30GB",
    id: 50,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
  },
];
const Minutes = [
  {
    value: "30 min",
    id: 400,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
  },
  {
    value: "50 min",
    id: 500,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
  },
  {
    value: "340 min",
    id: 600,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
  },
];
const SMS = [
  {
    value: "50",
    id: 6000,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
  },
  {
    value: "100",
    id: 7000,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
  },
  {
    value: "150",
    id: 8000,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
  },
];

const configData = [
  {
    title: "Validity",
    value: Validity,
    label: "Day",
  },
  {
    title: "Internet",
    value: Internet,
    label: "MB",
  },
  {
    title: "Minutes",
    value: Minutes,
    label: "Min",
  },
  {
    title: "SMS",
    value: SMS,
    label: "SMS",
  },
];

const packageConfig = [
  {
    id: 1,
    day: "7 days",
    internet: [
      {
        value: "7GB",
        id: 30,
        title: "",
        regularPrice: 20,
        discountPrice: 18,
      },
      {
        value: "15GB",
        id: 40,
        title: "",
        regularPrice: 20,
        discountPrice: 18,
      },
    ],
    sms: [
      {
        value: "50",
        id: 6000,
        title: "",
        regularPrice: 20,
        discountPrice: 18,
      },
    ],
    minutes: [
      {
        value: "30 min",
        id: 400,
        title: "",
        regularPrice: 20,
        discountPrice: 18,
      },
      {
        value: "50 min",
        id: 500,
        title: "",
        regularPrice: 20,
        discountPrice: 18,
      },
    ],
  },
];

const HomeComponent = () => {
  const [selectedSms, setSelectedSms] = useState<string>("0");
  const [selectedValidity, setSelectedValidity] = useState<string>("0");
  const [selectedMinutes, setSelectedMinutes] = useState<string>("0");
  const [selectedInternet, setSelectedInternet] = useState<string>("0");
  const [daySelected, setDaySelected] = useState(undefined);

  const handleValidity = async (e: any, label: string) => {
    if (label === "Validity") {
      setSelectedValidity(e.target.value);
      // @ts-ignore
      setDaySelected(packageConfig.find((item) => item.day === e.target.value));
    } else if (label === "SMS") {
      setSelectedSms(e.target.value);
    } else if (label === "Minutes") {
      setSelectedMinutes(e.target.value);
    } else if (label === "Internet") {
      setSelectedInternet(e.target.value);
    }
  };

  return (
    <BlPlanWrap className="blPlanWrap">
      <div className="container" style={{ background: "#fff" }}>
        <h4>Banglalink Flexiplan</h4>
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-12 col-12">
            {configData.map((item, i) => (
              <div className={`planContent ${item.title}`} key={i}>
                <div className="row">
                  <div className="col-4">
                    <h3>{item.title}</h3>
                    <p>
                      {item.title === "Validity"
                        ? selectedValidity
                        : item.title === "SMS"
                        ? selectedSms
                        : item.title === "Internet"
                        ? selectedInternet
                        : selectedMinutes}
                    </p>
                  </div>
                  <div className="col-8">
                    <div className="packItemWrap">
                      {item.value.map((b: any, i: number) => (
                        <div className="packItem" key={i}>
                          {daySelected ? (
                            <input
                              name={item.title}
                              type="radio"
                              id={b.id}
                              disabled={
                                !!(
                                  daySelected &&
                                  item.title !== "Validity" &&
                                  daySelected[item.title.toLowerCase()].length >
                                    0 &&
                                  daySelected[item.title.toLowerCase()].some(
                                    (x) => x.id === b.id
                                  )
                                )
                              }
                              value={b.value}
                              onChange={(e) => handleValidity(e, item.title)}
                            />
                          ) : (
                            <input
                              name={item.title}
                              type="radio"
                              id={b.id}
                              value={b.value}
                              onChange={(e) => handleValidity(e, item.title)}
                            />
                          )}
                          <label htmlFor={b.id} className="packData">
                            {b.value}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/*<div className="planContent Internet">*/}
            {/*  <div className="row">*/}
            {/*    <div className="col-4">*/}
            {/*      <h3>Internet</h3>*/}
            {/*      <p>*/}
            {/*        <small>Regular</small>*/}
            {/*      </p>*/}
            {/*      <p>{internet}</p>*/}
            {/*    </div>*/}
            {/*    <div className="col-8">*/}
            {/*      <div className="packItemWrap">*/}
            {/*        {Internet.map((item: any, i: number) => (*/}
            {/*          <div className="packItem" key={i}>*/}
            {/*            <input*/}
            {/*              name="Internet"*/}
            {/*              type="radio"*/}
            {/*              id={`Internet_${i}`}*/}
            {/*              value={item}*/}
            {/*              onChange={(e) => handleInternet(e)}*/}
            {/*            />*/}
            {/*            <label htmlFor={`Internet_${i}`} className="packData">*/}
            {/*              {item}*/}
            {/*            </label>*/}
            {/*          </div>*/}
            {/*        ))}*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="planContent Minutes">*/}
            {/*  <div className="row">*/}
            {/*    <div className="col-4">*/}
            {/*      <h3>Minutes</h3>*/}
            {/*      <p>{minutes} Min</p>*/}
            {/*      <p>*/}
            {/*        <small>*/}
            {/*          <small>Any local Number</small>*/}
            {/*        </small>*/}
            {/*      </p>*/}
            {/*    </div>*/}
            {/*    <div className="col-8">*/}
            {/*      <div className="packItemWrap">*/}
            {/*        {Minutes.map((item: any, i: number) => (*/}
            {/*          <div className="packItem" key={i}>*/}
            {/*            <input*/}
            {/*              name="Minutes"*/}
            {/*              type="radio"*/}
            {/*              id={`Minutes_${i}`}*/}
            {/*              value={item}*/}
            {/*              onChange={(e) => handleMinutes(e)}*/}
            {/*            />*/}
            {/*            <label htmlFor={`Minutes_${i}`} className="packData">*/}
            {/*              {item}*/}
            {/*            </label>*/}
            {/*          </div>*/}
            {/*        ))}*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="planContent SMS">*/}
            {/*  <div className="row">*/}
            {/*    <div className="col-4">*/}
            {/*      <h3>SMS</h3>*/}
            {/*      <p>{sms} SMS</p>*/}
            {/*    </div>*/}
            {/*    <div className="col-8">*/}
            {/*      <div className="packItemWrap">*/}
            {/*        {SMS.map((item: any, i: number) => (*/}
            {/*          <div className="packItem" key={i}>*/}
            {/*            <input*/}
            {/*              name="sms"*/}
            {/*              type="radio"*/}
            {/*              id={`sms_${i}`}*/}
            {/*              value={item}*/}
            {/*              onChange={(e) => handleSms(e)}*/}
            {/*            />*/}
            {/*            <label htmlFor={`sms_${i}`} className="packData">*/}
            {/*              {item}*/}
            {/*            </label>*/}
            {/*          </div>*/}
            {/*        ))}*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
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
                      <span className="longevity">{selectedValidity}</span>
                      <span className="voice">{selectedMinutes}</span>
                      <span className="internet">{selectedInternet}</span>
                      <span className="sms">{selectedSms}</span>
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
