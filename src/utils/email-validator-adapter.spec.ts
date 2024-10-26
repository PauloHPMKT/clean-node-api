import { EmailValidatorAdapter } from './email-validator';
import validator from 'validator';

// Para validar um email, o método isEmail do pacote validator deve retornar true
// Para isso, vamos mockar o método isEmail do pacote validator
// Para isso, vamos mockar o pacote validator
jest.mock('validator', () => ({
  isEmail(): boolean {
    return true;
  },
}));

const makeSut = (): EmailValidatorAdapter => {
  const sut = new EmailValidatorAdapter();
  return sut;
};

// O teste deve garantir que o método isValid do EmailValidatorAdapter retorne false
// caso o método isEmail do pacote validator retorne false
// Para isso, vamos mockar o método isEmail do pacote validator
// Por isso utiliza-se o jest.spyOn para mockar o método isEmail do pacote validator
describe('EmailValidatorAdapter', () => {
  it('Should return false if validator returns false', () => {
    const sut = makeSut();
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false);
    const isValid = sut.isValid('invalid_email@mail.com');
    expect(isValid).toBe(false);
  });

  it('Should return true if validator returns false', () => {
    const sut = makeSut();
    const isValid = sut.isValid('valid_email@mail.com');
    expect(isValid).toBe(true);
  });

  it('Should call validator with correct email', () => {
    const sut = makeSut();
    const isEmailSpy = jest.spyOn(validator, 'isEmail');
    sut.isValid('any_email@mail.com');
    expect(isEmailSpy).toHaveBeenCalledWith('any_email@mail.com');
  });
});
