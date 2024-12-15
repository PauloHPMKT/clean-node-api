import request from 'supertest';
import app from '../config/app';
import { beforeEach } from 'node:test';
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper';

describe('Signup Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL as string);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(async () => {
    const accountCollection = MongoHelper.getCollection('accounts');
    await accountCollection.deleteMany({});
  });

  it('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Paulo',
        email: 'paulo_email@mail.com',
        password: '123456',
        passwordConfirmation: '123456',
      })
      .expect(200);
  });
});
