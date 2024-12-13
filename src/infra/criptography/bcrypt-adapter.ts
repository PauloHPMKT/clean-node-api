import { Encrypter } from '../../data/protocols/encrypter';
import bcrypt from 'bcrypt';

export class BcryptAdapter implements Encrypter {
  private readonly salt: number;
  // Salt é adicionado no construtor para que a classe BcryptAdapter seja responsável por definir o salt
  // e não a implementação do protocolo Encrypter
  constructor(salt: number) {
    this.salt = salt;
  }

  async encrypt(value: string): Promise<string> {
    const hashed = await bcrypt.hash(value, this.salt);
    return hashed;
  }
}
