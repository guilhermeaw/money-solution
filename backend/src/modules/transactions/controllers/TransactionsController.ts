import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateTransactionService from '../services/CreateTransactionService';
import DeleteTransactionService from '../services/DeleteTransactionService';
import ListMyTransactionsService from '../services/ListMyTransactionsService';

export default class TransactionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { title, amount, type, category } = request.body;

    const transaction = await new CreateTransactionService().execute({
      amount,
      category,
      title,
      type,
      user_id: Number(user_id),
    });

    return response.json(transaction);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    await new DeleteTransactionService().execute(id);

    return response.status(204).json();
  }

  public async listMy(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const transaction = await new ListMyTransactionsService().execute({
      user_id: Number(user_id),
    });

    return response.json(instanceToPlain(transaction));
  }
}
