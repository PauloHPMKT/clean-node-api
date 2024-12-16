import { DbAddAccount } from '../../data/usecases/add-account/db-add-account';
import { BcryptAdapter } from '../../infra/criptography/bcrypt-adapter';
import { AccountMongoRepository } from '../../infra/db/mongodb/account-repository/account';
import { SignUpController } from '../../presentation/controllers/signup/signup';
import { EmailValidatorAdapter } from '../../utils/email-validator-adapter';

export const makeSignupControllerFactory = (): SignUpController => {
  const salt = 12;
  const bcryptAdapter = new BcryptAdapter(salt);
  const accountMongoRepository = new AccountMongoRepository();
  const emailValidatorAdapater = new EmailValidatorAdapter();
  const dbAddAcount = new DbAddAccount(bcryptAdapter, accountMongoRepository);

  return new SignUpController(emailValidatorAdapater, dbAddAcount);
};
