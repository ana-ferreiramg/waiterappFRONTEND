import styled from 'styled-components';

export const Board = styled.div`
  padding: 1.6rem;
  border: 0.1rem solid rgba(204, 204, 204, 0.4);
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  > header {
    padding: 0.8rem;
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2.4rem;

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;

    background-color: #fff;
    border: 0.1rem solid rgba(204, 204, 204, 0.4);
    border-radius: 0.8rem;

    height: 12.8rem;
    width: 100%;


    & + button {
      margin-top: 2.4rem;
    }

    strong {
      font-weight: 500;
    }

    span {
      font-size: 1.4rem;
      color: #666;
    }
  }
`;
