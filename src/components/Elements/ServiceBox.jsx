import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "plumbing":
      getIcon = "https://as2.ftcdn.net/v2/jpg/02/20/20/41/1000_F_220204174_vfgB0Vo2i4MZ8Sv5hmtsx5IwcvrDCZox.jpg";
      break;
    case "electric":
      getIcon = "https://as2.ftcdn.net/v2/jpg/04/57/40/47/1000_F_457404723_MxgdyTNPardSU6z6rLE0YQu5Y8Jl7G8q.jpg"
      break;
    
    default:
      getIcon = <RollerIcon />;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <img src={getIcon} width={"100%"} />
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;