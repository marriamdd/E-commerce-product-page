import styled from "styled-components";

export default function ContentContainer() {
  return (
    <ContentWrapper>
      <div className="descriptionsContainer">
        <h4>Sneaker Company</h4>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
    </ContentWrapper>
  );
}
const ContentWrapper = styled.div`
  .descriptionsContainer {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    & > h4 {
      color: #ff7e1b;
      font-size: 1.2rem;
      font-weight: 700;
      letter-spacing: 1.846px;
      text-transform: uppercase;
    }
    & > h2 {
      color: #1d2026;
      font-size: 2.8rem;
      font-weight: 700;
      line-height: 3.2rem;
    }
    & > p {
      color: #69707d;
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 2.5rem;
    }
  }
`;
