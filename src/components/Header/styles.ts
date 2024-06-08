import styled from 'styled-components';

export const Container = styled.header`
  background-color: #D73035;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 198px;
`;

export const Content = styled.div`
  width: min(100%, 1216px);
  margin-inline: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .page-details {
    h1,
    h2 {
      color: #fff;
    }

    h1 {
      font-size: 3.2rem;
    }

    h2 {
      opacity: 0.9;
      font-weight: 400;
      font-size: 1.6rem;
      margin-top: 0.6rem;
    }
  }
`;
