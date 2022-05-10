import { Request, Response } from 'express';

import CreateTransactionService from '../services/CreateTransactionService';

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
}
