import { instanceToPlain } from 'class-transformer';
import { Request, Response } from 'express';

import CreateTransactionService from '../services/CreateTransactionService';
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

  public async listMy(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const transaction = await new ListMyTransactionsService().execute({
      user_id: Number(user_id),
    });

    return response.json(instanceToPlain(transaction));
  }
}
