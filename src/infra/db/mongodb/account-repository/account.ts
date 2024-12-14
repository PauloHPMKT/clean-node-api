import { AddAccountRepository } from '../../../../data/protocols/add-aacount-repository';
import { AccountModel } from '../../../../domain/models/account';
import { AddAccountModel } from '../../../../domain/usecases/add-account';
import { MongoHelper } from '../helpers/mongo-helper';

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts');
    const { insertedId } = await accountCollection.insertOne(accountData);

    const account = await accountCollection.findOne({ _id: insertedId });

    if (!account) {
      throw new Error('Account not found');
    }
    const { _id, ...rest } = account;
    return Object.assign({}, rest, { id: _id.toHexString() }) as AccountModel;
  }
}
