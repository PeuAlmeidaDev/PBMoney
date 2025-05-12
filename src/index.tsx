import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 100,
          type: 'deposit',
          category: 'Automação',
          createdAt: new Date('2021-01-01 12:00:00'),
        },

        {
          id: 2,
          title: 'Transaction 2',
          amount: 200,
          type: 'withdraw',
          category: 'Food',
          createdAt: new Date('2021-01-01 12:00:00'),
        },

        {
          id: 3,
          title: 'Transaction 3',
          amount: 300,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2021-01-01 12:00:00'),
        },
      ];
    });
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

