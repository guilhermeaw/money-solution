import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateTransactionService from '../services/CreateTransactionService';
import DeleteTransactionService from '../services/DeleteTransactionService';
import ListMyTransactionsService from '../services/ListMyTransactionsService';

export default class TransactionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { title, amount, type, category_id } = request.body;

    const createTransaction = container.resolve(CreateTransactionService);

    const transaction = await createTransaction.execute({
      amount,
      category_id,
      title,
      type,
      user_id: Number(user_id),
    });

    return response.json(transaction);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTransaction = container.resolve(DeleteTransactionService);

    await deleteTransaction.execute(id);

    return response.status(204).json();
  }

  public async listMy(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const listMyTransactions = container.resolve(ListMyTransactionsService);

    const transaction = await listMyTransactions.execute({
      user_id: Number(user_id),
    });

    return response.json(instanceToPlain(transaction));
  }
}
