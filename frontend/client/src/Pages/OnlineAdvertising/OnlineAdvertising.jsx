import styled from "styled-components";
import { useTheme,Box, } from "@mui/material";
import ButtonUnstyled from '@mui/base/ButtonUnstyled'
import hr from "./images/hr.svg";
import { Link } from "react-router-dom";

const OnlineAdvertising = () => {
  const theme = useTheme();
  const DarkMode = theme.palette.mode === "dark";

  const textColor = DarkMode ? "#fff" : "";

  const period = "2020 monthly average";
  return (
    <Box  marginTop="50px" fontFamily= "'Inter', sans-serif" maxWidth="1440px">
      <Box style={{ color: textColor,position:'relative' }}  margin="0px auto" sx={{
          maxWidth: { xs: "84%", sm: "90%", md: "84%" }
        }} >
        <StyledH1>Advertising media kit</StyledH1>

        <Box>
          <StyledH3>Our audience</StyledH3>

          <CustomButton style={{backgroundColor:'#0062ff', color:'#f8fafc'}}  ><Link style={{ color:'#f8fafc'}} to='/apply-to-advertise'>Apply to Advertise</Link></CustomButton>
          <StyledP>
            Street Rates are the most sought after on the internet - They’re
            affulent , in-market, ready to transact, and have high credit
            scores. We offer a user-friendly environment for the consumers rates
            and interact with our advertising partners.
          </StyledP>
          <StyledP>
            Our trusted, well known name and our objectivity are important to
            consumers who are on the verge of making important financial
            decisions.
          </StyledP>
        </Box>

        <Box>
          <Figure>
            <img src={hr} alt="line throgh" />
          </Figure>

          <StyledH3>Key stats</StyledH3>

          <StatsDiv>
            <MobileStatDiv>
              <StatDiv>
                <Number>23 million</Number>
                <Stat>CONVERSION RATE VIEWS</Stat>
                <Period>{period}</Period>
              </StatDiv>
            </MobileStatDiv>

            <MobileStatDiv>
              <StatDiv>
                <Number>10 million</Number>
                <Stat>USERS</Stat>
                <Period>{period}</Period>
              </StatDiv>
            </MobileStatDiv>
          </StatsDiv>

          <StatsDiv>
            <MobileStatDiv>
              <StatDiv>
                <Number>41 million</Number>
                <Stat>OVERALL PAGE VIEWS</Stat>
                <Period>{period}</Period>
              </StatDiv>
            </MobileStatDiv>

            <StatDiv>
              <Number>15 million</Number>
              <Stat>OVERALL USERS</Stat>
              <Period>{period}</Period>
            </StatDiv>
          </StatsDiv>

          <Figure>
            <img src={hr} alt="line throgh" />
          </Figure>
        </Box>

        <Box>
          <StyledH3>Street Rates Advertisment</StyledH3>
          <StyledP>
            Street rates advertising system is amongst the most efficient ways
            to connect directly with in-market consumers. Whether you advertise
            on cost-per-head, cost-per-click or cost-per-call structures our
            Smart pricing algorithm ensures that your marketing dollars drive a
            successful campaign. How is that possible? Simple. The data you
            share with us help us optimize our advertisers’ performance by
            allowing us to quickly pivot and make adjustments as soon as trends
            become apparent.{" "}
          </StyledP>

          <StyledH4>How it works</StyledH4>
          <StyledP>
            Street Rate users are qualified, verified and ready to transact
            consumers who are interested in your fianacial products.
            Investments, auto and home equity advertisers are only charged if a
            consumer clicks on your company’s hyperlink. If they don’t click,
            you don’t pay! This means you only pay for qualified, engaged
            consumers who want to learn more about your services.
          </StyledP>

          <StyledH4>Why advertise with us?</StyledH4>
          <StyledP>
            We are a license company who gets her data from realiable sources
            such as national banks and the financial institution to provide
            accurate bank rates and as such we’ve built trust and intergrity.
            Our system supports Street Rate validation for 97 countries. We add
            support for new countries as soon as they officially adopt the
            Street Rate standard which will enable you or your services reach
            diverse people and countries. System security and data protection is
            important to us.{" "}
            <Link to="/" style={{ color: "#3381FF" }}>
              Learn more
            </Link>{" "}
            on what steps and technical measures we take to protect your data.
            For the years we’ve been providing services, more than 1000
            companies have trusted us to validate payment details.{" "}
          </StyledP>
        </Box>

        <StyledH4>Documents to get started</StyledH4>
        <ul>
          <Li>Click, lead and call policy</Li>
          <Li>Advertising refund policy</Li>
          <Li>Quality control program</Li>
          <Li>Placement policy</Li>
          <Li>Payment plans</Li>
        </ul>

        <StyledH4>Company logo specs</StyledH4>
        <ul>
          <Li>125(width) x 45(height) GIF</Li>
          <Li>
            Any taglines associated with the logo must be official corporate
            taglines
          </Li>
          <Li>File size - 2k maximum</Li>
          <Li>
            All required logo trademarks or registration marks must be included
            in the file- Street rate will not add “registered trademark” for you
          </Li>
          <Li>Must be on transparent background with no border</Li>
          <Li>
            Only one logo per advertiser allowed- no seperate logos for rate
            tables and lightbox
          </Li>
        </ul>

        <Figure>
          <img src={hr} alt="line throgh" />
        </Figure>

        <Box sx={{
          marginBottom:{xs:'64px', sm:'80px'}
        }}>
          <StyledH3>Contact one of our sales representatives</StyledH3>
          <StyledP>
            Kindly reach out to our sales representatives for complaints,
            registrations and more enquires via email on{" "}
            <a
              href="mailto:hello@streetrate.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#3381FF" }}
            >
              hello@streetrate.com,
            </a>{" "}
            you can as well reach out to us via the livechat on the app.{" "}
          </StyledP>
        </Box>
       
      </Box>
    </Box>
  );
};
const CustomButton = styled(ButtonUnstyled)`
font-family: 'Inter', sans-serif;
font-size: 14px;
font-weight: 600;
line-height: 20px;
letter-spacing: -0.02em;
text-align: center;
width:100%;
height:32px;
border-radius: 4px;
border:none;
margin-bottom:30px;

@media(min-width: 768px){
  position:absolute;
  width:23.5%;
  top:50px;
  right:0;
  margin-bottom:0;
}

`
    
  
/*const Container = styled.div`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center; .
  }
`;
const MainDiv = styled.div`
  max-width: 90vw;
  margin: 2vh auto 8vh;
  font-family: Inter;
  color: #0f172a;
  @media (min-width: 481px) {
    max-width: 87vw;
  }
  @media (min-width: 769px) {
    max-width: 83vw;
  }
`;*/

const StyledH1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 2vh;
  @media (min-width: 769px) {
    font-size: 48px;
    font-weight: 700;
    line-height: 56px;
    letter-spacing: -0.04em;
  }
`;

const StyledH3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 2vh;
  margin-bottom: 4vh;
  @media (min-width: 769px) {
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: -0.02em;
  }
`;

const StyledH4 = styled.h4`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 2vh;
  margin-bottom: 2vh;
`;

const StyledP = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.001em;
  text-align: left;
  margin-bottom: 4vh;
  @media (min-width: 769px) {
    font-family: Inter;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
  }
`;

const Figure = styled.figure`
  margin-top: 2vh;
  margin-left: 0;
  margin-bottom: 2vh;
`;

const StatsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 481px) {
    margin-top: 3vh;
    margin-bottom: 3vh;
    width: 80%;
  }
  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const MobileStatDiv = styled.div`
  @media (max-width: 480px) {
    margin-bottom: 6vh;
  }
`;

const StatDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Number = styled.p`
  font-size: 19px;
  font-weight: 600;
  line-height: 23px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #00296b;
  @media (min-width: 769px) {
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: -0.04em;
  }
`;

const Stat = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.02em;
  text-align: left;
  @media (min-width: 769px) {
    font-size: 22px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0em;
  }
`;
const Period = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #6474ab;
  margin-top: 2vh;
  @media (min-width: 769px) {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
  }
`;

const Li = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.001em;
  margin-left: 4vw;
  margin-bottom: 2vh;
  @media (min-width: 769px) {
    margin-left: 2vw;
  }
`;

export default OnlineAdvertising;
