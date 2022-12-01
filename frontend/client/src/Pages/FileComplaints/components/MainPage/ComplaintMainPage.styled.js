import styled from "styled-components";

export const StyledComplaintQuery = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: #f8fafc;

  @media screen and (max-width: 834px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .query {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 110px;

    @media screen and (max-width: 1100px) {
      gap: 10px;
    }

    .link {
      display: flex;
      gap: 10px;
      flex-direction: row;
      width: 100%;
      align-items: center;

      .contactSvg {
        height: 15px;
      }

      & img {
        @media screen and (max-width: 500px) {
          height: 20px;
        }
      }
    }

    @media screen and (max-width: 1100px) {
      margin-left: 50px;
    }

    @media screen and (max-width: 834px) {
      width: 90%;
      margin: 30px auto;
    }

    & h3 {
      font-size: 50px;

      @media screen and (max-width: 1100px) {
        font-size: 40px;
      }
    }

    & p {
      font-size: 18px;

      @media screen and (max-width: 1100px) {
        font-size: 15px;
      }
    }

    .topText {
      font-weight: 600;
    }

    .bottomText {
      width: 80%;
      line-height: 1.5;

      @media screen and (max-width: 834px) {
        width: 90%;
      }
    }

    .linkText {
      color: #0062ff;
      font-weight: bold;
      font-size: 16px;

      @media screen and (max-width: 500px) {
        font-size: 14px;
      }
    }
  }

  .queryImage {
    width: 712px;

    @media screen and (max-width: 1100px) {
      width: 450px;
    }

    @media screen and (max-width: 834px) {
      width: 90%;
    }
  }
`;

export const StyledComplaintEnquiry = styled.section`
  width: 60%;
  margin: 0 auto;
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 80%;
  }

  .header {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;

    @media screen and (max-width: 500px) {
      text-align: start;
    }
  }

  .subHeader {
    font-size: 18px;
    width: 80%;
    text-align: center;
    margin-bottom: 50px;
    line-height: 1.5;

    @media screen and (max-width: 1100px) {
      font-size: 17px;
    }

    @media screen and (max-width: 500px) {
      width: 100%;
      text-align: start;
    }
  }

  .enquiry {
    width: 80%;
    margin: 0 auto;
    display: flex;
    gap: 5px;
    justify-content: space-between;

    @media screen and (max-width: 900px) {
      width: 100%;
    }

    @media screen and (max-width: 500px) {
      flex-direction: column;
      width: 100%;
      gap: 50px;
    }

    & div {
      width: 45%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      border: 1px solid rgba(0, 98, 255, 1);
      padding: 40px 20px;
      border-radius: 10px;
      align-items: flex-start;
      background: #fffefc;

      @media screen and (max-width: 500px) {
        width: 100%;
      }

      & h3 {
        font-size: 22px;
      }

      & p {
        font-size: 17px;
        line-height: 1.5;
      }
    }
  }
`;

export const StyledNeedMoreHelp = styled.section`
  background-color: #f8fafc;
  padding: 50px 0px 50px 150px;
  margin-bottom: 100px;

  & h2 {
    font-weight: 600;
    font-size: 40px;
  }

  @media screen and (max-width: 500px) {
    padding: 40px;
  }

  & div {
    width: 50%;

    @media screen and (max-width: 500px) {
      width: 90%;
    }

    .more {
      margin: 13px 0;
      font-size: 17px;
      line-height: 1.5;
    }

    & p {
      font-size: 16px;
    }

    .link {
      display: flex;
      gap: 10px;
      flex-direction: row;
      width: 100%;
      align-items: center;
      cursor: pointer;
    }

    .linkText {
      color: rgba(0, 98, 255, 1);
      font-weight: bold;
      font-size: 16px;
    }
  }
`;
