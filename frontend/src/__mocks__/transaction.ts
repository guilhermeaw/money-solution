import { Transaction } from '../models/Transaction';

export const mockTransactions = [
  {
    id: 1,
    title: 'Transação 1',
    amount: 300,
    type: 'income',
    category: { id: 1, title: 'Salário', description: 'Ganhos com salário' },
    category_id: 1,
    created_at: new Date(),
  },
  {
    id: 2,
    title: 'Transação 2',
    amount: 100,
    type: 'outcome',
    category: { id: 2, title: 'Farmácia', description: 'Gastos com farmácia' },
    category_id: 2,
    created_at: new Date(),
  },
] as Transaction[];
