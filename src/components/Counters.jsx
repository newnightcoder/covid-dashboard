import React from "react";
import styled from "styled-components";
import numeral from "numeral";
import CountUp from "react-countup";
import img1 from "../img/virus.jpg";
import img2 from "../img/rip.png";
import img3 from "../img/recovered.png";

const theme = {
  infected: {
    default: "#f44336",
  },
  death: {
    default: "black",
    // "#A19C9C",
  },
  recovered: {
    default: "#2196f3",
  },
};

//----------------------------------------------------------------
const SectionTitle = styled.h1`
  /* transform: translateX(-22vw); */
  position: relative;
  margin-left: -50vw;
  color: #eeee;
`;
//----------------------------------------------------------------
const CountersWrapper = styled.div`
  /* border:1px solid white; */
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 5vh;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 50vh;
    width: 100%;
  }
`;
//----------------------------------------------------------------
const Counter = styled.div`
  /* border: 1px solid red; */
  width: 30%;
  height: 100%;
  display: grid;
  grid-template-rows: 90px 40px 1fr 1fr;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 3px;
  color: ${(props) => theme[props.theme].default};
  background-color: #eeee;
  position: relative;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  transition: transform 250ms;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 7px;
    background-color: transparent;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
    &::after {
      background-color: ${(props) => theme[props.theme].default};
    }
  }
  @media (max-width: 800px) {
    width: 30%;
    height: 100%;
  }
`;
//----------------------------------------------------------------
const ImgWrapper = styled.div`
  width: 100%;
  grid-row: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;
//----------------------------------------------------------------
const Title = styled.div`
  grid-row: 2;
  align-self: center;
  position: relative;
  &::after {
    content: "";
    width: 80%;
    height: 1px;
    background-color: lightgray;
    position: absolute;
    bottom: -1.25vh;
    left: 10%;
  }
`;
const TitleSpan = styled.span`
  color: rgb(50, 50, 50);
  text-transform: uppercase;
  font-weight: 800;
`;
//----------------------------------------------------------------
const TodayWrapper = styled.div`
  grid-row: 3;
  font-size: 1.3rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: "today";
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    margin-left: 0.75em;
    height: 15px;
    width: 50px;
    color: black;
    border: 1px solid lightgray;
    border-radius: 3px;
    padding: 1px 1px 2px;
  }
  &:hover {
    animation: bleep 1s infinite;
  }
`;
//----------------------------------------------------------------
const TotalWrapper = styled.div`
  grid-row: 4;
  color: dimgray;
  font-size: 1rem;
  text-align: center;
  line-height: 1.5;
  align-self: center;
  padding-bottom: 2vh;
`;

// const BriefLoader = styled.div`
//   width: 100%;
//   text-align: center;
//   text-transform: uppercase;
//   font-style: italic;
//   display: flex;
//   justify-content: center;
// `;
// const Loader = styled.div`
//   height: 20px;
//   width: 20px;
//   border-top: 2px solid blue;
//   background-color: transparent;
// `;

const Counters = ({ data, toggleMore, btnText }) => {
  // if (!confirmed || !deaths || !recovered) {
  //   return <BriefLoader>loading data...</BriefLoader>;
  // }

  // const [showMore, setShowMore] = useState(false);

  // const toggleMore = () => {
  //   setShowMore((showMore) => !showMore);
  // };

  // const more = () => {
  //   if (showMore) {
  //     return <More data={confirmed} />;
  //   }
  // };

  const formatNumbers = (number, f) => {
    if (f === "de") return new Intl.NumberFormat("de-DE").format(number);
    if (f === "fr") return new Intl.NumberFormat("us-US").format(number);
  };

  if (!data.todayDeaths) {
    return `loading...`;
  }

  return (
    <div
      style={{
        paddingTop: "10vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // border: "2px solid pink",
      }}
    >
      <SectionTitle>Worldwide Statistics</SectionTitle>
      <CountersWrapper>
        <Counter theme="infected">
          <ImgWrapper
            alt="virus image"
            style={{
              background: `url(${img1}) no-repeat center/cover`,
            }}
          ></ImgWrapper>
          <Title>
            <i
              style={{ fontSize: "1.3rem", marginRight: "1vh" }}
              className="fas fa-lungs-virus"
            ></i>
            <TitleSpan>confirmed cases</TitleSpan>
          </Title>
          <TodayWrapper>
            {" "}
            +
            <CountUp
              end={data.todayConfirmed}
              start={0}
              duration={5}
              separator={"."}
            ></CountUp>
          </TodayWrapper>
          <TotalWrapper>
            <span style={{ fontWeight: "bold", marginRight: ".5vw" }}>
              {" "}
              Total:&nbsp;{numeral(data.confirmed).format("0,0a")}
            </span>
            <br />
            (Exact number:&nbsp;
            {formatNumbers(data.confirmed, "fr")})
          </TotalWrapper>
        </Counter>
        <Counter theme="death">
          <ImgWrapper
            alt="RIP image"
            style={{
              background: `url(${img2}) no-repeat center/150%`,
            }}
          ></ImgWrapper>
          <Title>
            <i
              style={{ fontSize: "1.3rem", marginRight: "1vh" }}
              className="fas fa-skull-crossbones"
            ></i>
            <TitleSpan> deaths</TitleSpan>
          </Title>
          <TodayWrapper>
            +
            <CountUp
              end={data.todayDeaths}
              start={0}
              duration={3}
              separator={"."}
            ></CountUp>
          </TodayWrapper>

          <TotalWrapper>
            <span style={{ fontWeight: "bold", marginRight: ".5vw" }}>
              Total:&nbsp;{numeral(data.deaths).format("0,0a")}
            </span>
            <br />
            (Exact number:&nbsp;
            {formatNumbers(data.deaths, "fr")})
          </TotalWrapper>
        </Counter>
        <Counter theme="recovered">
          <ImgWrapper
            alt="recovered patient with doctors"
            style={{
              background: `url(${img3}) no-repeat center/cover`,
            }}
          ></ImgWrapper>
          <Title>
            <i
              style={{
                fontSize: "1.3rem",
                marginRight: "1vh",
              }}
              className="fas fa-virus-slash"
            ></i>
            <TitleSpan>recovered</TitleSpan>
          </Title>
          <TodayWrapper>
            {" "}
            +
            <CountUp
              end={data.todayRecovered}
              start={0}
              duration={4}
              separator={"."}
            ></CountUp>
          </TodayWrapper>
          <TotalWrapper>
            <span style={{ fontWeight: "bold", marginRight: ".5vw" }}>
              Total:&nbsp;{numeral(data.recovered).format("0,0a")}
            </span>
            <br />
            (Exact number:&nbsp; {formatNumbers(data.recovered, "fr")})
          </TotalWrapper>
        </Counter>
      </CountersWrapper>

      <button
        onClick={() => toggleMore()}
        style={{ width: "10ch", cursor: "pointer" }}
      >
        {btnText}
      </button>
      {/* {more()} */}
    </div>
  );
};
export default Counters;
