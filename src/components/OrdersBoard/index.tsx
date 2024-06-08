import { Board, OrdersContainer } from './styles';

export function OrdersBoard() {
  return (
    <Board>
      <header>
        <span>🕐</span>
        <strong>Fila de espera</strong>
        <span>(1)</span>
      </header>

      <OrdersContainer>
        <button type="button">
          <strong>Mesa 02</strong>
          <span>02 itens</span>
        </button>
        <button type="button">
          <strong>Mesa 02</strong>
          <span>02 itens</span>
        </button>
      </OrdersContainer>
    </Board>
  );
}
