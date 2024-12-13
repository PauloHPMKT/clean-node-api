import bcrypt from 'bcrypt';
import { BcryptAdapter } from './bcrypt-adapter';

/**
 * Realizando mock da biblioteca do bcrpyt para forçarmos
 * o retorno do hash para um valor fixo
 */
jest.mock('bcrypt', () => ({
  async hash(): Promise<string> {
    return new Promise((resolve) => resolve('hash'));
  },
}));

describe('BcriptAdapter', () => {
  it('Should call bcript with correct values', async () => {
    const salt = 12;
    const sut = new BcryptAdapter(salt);
    const hashSpy = jest.spyOn(bcrypt, 'hash');
    await sut.encrypt('any_value');
    expect(hashSpy).toHaveBeenCalledWith('any_value', salt);
  });

  it('Should return a hash on success', async () => {
    const salt = 12;
    const sut = new BcryptAdapter(salt);
    const hash = await sut.encrypt('any_value');
    expect(hash).toBe('hash');
  });
});
