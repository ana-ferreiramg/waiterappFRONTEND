import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '665cafde3febb33c7cd591d0',
    'table': '01',
    'status': 'IN_PRODUCTION',
    'products': [
      {
        'product': {
          'name': 'Hamburguer',
          'imagePath': '1717344220114-burger-molho-especial.png',
          'price': 10,
        },
        'quantity': 2,
        '_id': '665cafde3febb33c7cd591d1'
      },
      {
        'product': {
          'name': 'Coca-cola',
          'imagePath': '1717348914706-coca-cola.png',
          'price': 8,
        },
        'quantity': 2,
        '_id': '665cafde3febb33c7cd591d2'
      }
    ]
  },
  {
    '_id': '665cb0173febb33c7cd591e7',
    'table': '02',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza quatro queijos',
          'imagePath': '1717343145530-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 1,
        '_id': '665cb0173febb33c7cd591e8'
      },
      {
        'product': {
          'name': 'Pizza Marguerita',
          'imagePath': '1717343581620-marguerita.png',
          'price': 48.79,
        },
        'quantity': 1,
        '_id': '665cb0173febb33c7cd591e9'
      },
      {
        'product': {
          'name': 'Coca-cola',
          'imagePath': '1717348914706-coca-cola.png',
          'price': 8,
        },
        'quantity': 2,
        '_id': '665cb0173febb33c7cd591ea'
      }
    ]
  }
];

export function Orders() {
  return (
    <Container >
      <OrdersBoard
        icon="🕐"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="🧑‍🍳"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={[]}
      />
    </Container>
  );
}

