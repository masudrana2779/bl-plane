import { useState } from "react";
import { BlPlanWrap } from "./Home.styled";


type packDetail = {
  value: string,
  id: number,
  title: string,
  regularPrice: number,
  discountPrice: number,
  discount: number
};

type daySelectType = {
  value: string,
  id: number,
  title: string,
};

type configDataType = {
  title: string,
  value: packDetail[] | daySelectType[],
  label: string
}

const Validity: daySelectType[] = [
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

const Internet: packDetail[] = [
  {
    value: "100MB",
    id: 10,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
    discount: 10
  },
  {
    value: "3GB",
    id: 20,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
    discount: 8
  },
  {
    value: "7GB",
    id: 30,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
    discount: 7
  },
  {
    value: "15GB",
    id: 40,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
    discount: 16
  },
  {
    value: "30GB",
    id: 50,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
    discount: 10
  },
];
const Minutes: packDetail[] = [
  {
    value: "30 min",
    id: 400,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
    discount: 10

  },
  {
    value: "50 min",
    id: 500,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
    discount: 20
  },
  {
    value: "340 min",
    id: 600,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
    discount: 19
  },
];
const SMS: packDetail[] = [
  {
    value: "50",
    id: 6000,
    title: "",
    regularPrice: 10,
    discountPrice: 5,
    discount: 23
  },
  {
    value: "100",
    id: 7000,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
    discount: 10
  },
  {
    value: "150",
    id: 8000,
    title: "",
    regularPrice: 20,
    discountPrice: 18,
    discount: 17
  },
];

const configData: configDataType[] = [
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

interface IObjectKeys {
  [key: string]: any | packDetail[];
}

interface packageConfigType extends IObjectKeys{
  id: number;
  day: string;
  internet: packDetail[];
  sms: packDetail[];
  minutes: packDetail[]
}

const packageConfig: packageConfigType[] = [
  {
    id: 1,
    day: "3 days",
    internet: [
      {
        value: "30GB",
        id: 50,
        title: "",
        regularPrice: 20,
        discountPrice: 18,
        discount: 10
      }
    ],
    sms: [
      {
        value: "50",
        id: 6000,
        title: "",
        regularPrice: 20,
        discountPrice: 18,
        discount: 50
      },
    ],
    minutes: [
      {
        value: "340 min",
        id: 600,
        title: "",
        regularPrice: 20,
        discountPrice: 18,
        discount: 32
      },
    ],
  },{
    id: 2,
    day: "7 days",
    internet: [
      {
        value: "7GB",
        id: 30,
        title: "",
        regularPrice: 20,
        discountPrice: 18,
        discount: 14
      },
      {
        value: "15GB",
        id: 40,
        title: "",
        regularPrice: 20,
        discountPrice: 18,
        discount: 17
      },
    ],
    sms: [
      {
        value: "50",
        id: 6000,
        title: "",
        regularPrice: 20,
        discountPrice: 18,
        discount: 34
      },
    ],
    minutes: [
      {
        value: "30 min",
        id: 400,
        title: "",
        regularPrice: 20,
        discountPrice: 18,
        discount: 11
      },
      {
        value: "50 min",
        id: 500,
        title: "",
        regularPrice: 20,
        discountPrice: 18,
        discount: 17
      },
    ],
  },
];


const HomeComponent = () => {
  const [selectedSms, setSelectedSms] = useState<string>("50");
  const [selectedValidity, setSelectedValidity] = useState<string>('3 days');
  const [selectedMinutes, setSelectedMinutes] = useState<string>("340 min");
  const [selectedInternet, setSelectedInternet] = useState<string>("30GB");
  const [daySelected, setDaySelected] = useState<packageConfigType>(packageConfig[0]);
  const [smsPrice, setSmsPrice] = useState<packDetail|null>(null);
  const [interNetPrice, setInternetPrice] = useState<packDetail|null>(null);
  const [minutesPrice, setMinutesPrice] = useState<packDetail|null>(null);
  const [totalAmount, setTotalAmount] = useState<number>(40);
  const [totalDiscount, setTotalDiscount] = useState<number>(15);

  const handleValidity = async (e: any, label: string) => {
    if (label === "Validity") {
      setSelectedValidity(e.target.value);
      const packageConfigObj: packageConfigType | undefined = packageConfig.find((item) => item.day === e.target.value);
      packageConfigObj && setDaySelected(packageConfigObj);
      packageConfigObj && setDaySelected(packageConfigObj);
      packageConfigObj && setSelectedInternet(packageConfigObj.internet[0].value);
      packageConfigObj && setSelectedSms(packageConfigObj.sms[0].value);
      packageConfigObj && setSelectedMinutes(packageConfigObj.minutes[0].value);
      packageConfigObj && setTotalAmount(packageConfigObj.minutes[0].discountPrice + packageConfigObj.sms[0].discountPrice + packageConfigObj.internet[0].discountPrice)
    } else if (label === "SMS") {
      setSelectedSms(e.target.value);
      const k: packDetail | undefined = SMS.find((item) => item.value === e.target.value)
      k && setSmsPrice(k);
      console.log(k);
      k && setTotalAmount(prevState => prevState + k.discountPrice)
      console.log(k, e.target.value)
    } else if (label === "Minutes") {
      setSelectedMinutes(e.target.value);
      const y: packDetail | undefined =Minutes.find((item) => item.value === e.target.value)
      y && setMinutesPrice(y);
      y && setTotalAmount(prevState => prevState + y.discountPrice)

    } else if (label === "Internet") {
      setSelectedInternet(e.target.value);
      const x: packDetail | undefined = Internet.find((item) => item.value === e.target.value);
      x && setInternetPrice(x);
      x && setTotalAmount(prevState => prevState + x.discountPrice)
    }
  };

  // @ts-ignore
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
                          {daySelected && item.title !== "Validity" ? (
                            <input
                              name={item.title}
                              type="radio"
                              id={b.id}
                              checked={selectedInternet===b.value || selectedSms===b.value|| selectedMinutes===b.value}
                              disabled={
                                !(
                                  daySelected &&
                                  item.title !== "Validity" &&
                                  daySelected[item.title.toLowerCase()].length >
                                    0 &&
                                  daySelected[item.title.toLowerCase()].some(
                                    (x: any) => x.id === b.id
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
                              checked={b.value === daySelected.day}
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
          </div>
          <div className="Total">
            <div className="right-sidebar-container">
              <div className="right-sidebar">
                <div>
                  <h2 className="myob_bonus_num">
                    <span id="discount-amount">{Math.floor(Math.random() * 50)}</span>
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
                      ৳ <span id="bundle-price">{totalAmount}</span>
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
