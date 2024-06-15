import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurency } from '../../utils/formatCurrency';

import { Overlay, ModalBody, OrderDetails, Actions } from './styles';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {
  if (!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, { product, quantity }) => total + (product.price * quantity), 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type='button' onClick={onClose}>
            <img src={closeIcon} alt="Icon to close modal" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {order.status === 'WAITING' && '🕐'}
              {order.status === 'IN_PRODUCTION' && '🧑‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>

            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {order.status === 'DONE' && 'Pronto!'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className='item' key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width='70'
                  height='40'
                />

                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurency(product.price)}</span>
                </div>
              </div>
            ))}

            <div className="total">
              <span>Total</span>
              <strong>{formatCurency(total)}</strong>
            </div>
          </div>
        </OrderDetails>

        <Actions>
          <button type='button' className='primary'>
            <span>
              {order.status === 'WAITING' && '🧑‍🍳'}
              {order.status === 'IN_PRODUCTION' && '✅'}
            </span>

            <strong>
              {order.status === 'WAITING' && 'Iniciar produção'}
              {order.status === 'IN_PRODUCTION' && 'Concluir pedido'}
            </strong>
          </button>
          <button type='button' className='secondary'>
            Cancelar pedido
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
