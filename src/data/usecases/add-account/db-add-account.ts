import {
  AddAccount,
  AddAccountModel,
  AccountModel,
  Encrypter,
  AddAccountRepository,
} from './db-add-account-protocols';

export class DbAddAccount implements AddAccount {
  constructor(
    private readonly encrypter: Encrypter,
    private readonly addAccountRepository: AddAccountRepository,
  ) {}

  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encrypter.encrypt(accountData.password);
    const account = this.addAccountRepository.add({
      name: 'valid_name',
      email: 'valid_email@mail.com',
      password: hashedPassword,
    });
    /**
     * Tambem poderia utilizar o Object.assign para criar um novo objeto
     * Ex: const account = Object.assign({}, accountData, { password: hashedPassword });
     *
     * O parametro {} garante que o objeto alterado será uma copia, no caso, o accountData
     */
    return account;
  }
}
