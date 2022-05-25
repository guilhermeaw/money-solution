import { Request, Response } from 'express';

import CreateTransactionCategoryService from '../services/CreateTransactionCategoryService';
import ListAllTransactionCategoriesService from '../services/ListAllTransactionCategoriesService';

export default class TransactionCategoriesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, description } = request.body;

    const category = await new CreateTransactionCategoryService().execute({
      description,
      title,
    });

    return response.json(category);
  }

  public async listAll(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const categories =
      await new ListAllTransactionCategoriesService().execute();

    return response.json(categories);
  }
}
