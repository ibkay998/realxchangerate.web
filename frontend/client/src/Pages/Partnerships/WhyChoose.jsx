import React from "react";

// styles
import { StyledWhyChoose } from "./styles/WhyChoose.styles";

// why choose data
import { WhyChooseArray } from "./assets/data";

const WhyChoose = () => {
  return (
    <StyledWhyChoose>
      <h1 className="header">
        Help more companies discover the power of Street Rates
      </h1>

      {/* why choose */}
      <div className="WhyContainer">
        {WhyChooseArray.map((list) => {
          return (
            <div key={list.id} className="listDiv">
              <img src={list.icon} alt="icon" height={100} width={100} />
              <h2>{list.header}</h2>
              <p style={{}}>{list.description}</p>
            </div>
          );
        })}
      </div>
    </StyledWhyChoose>
  );
};

export default WhyChoose;
