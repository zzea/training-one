import { getCustomers } from '../CustomerService';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/training_one', { useNewUrlParser: true, useUnifiedTopology: true });

describe('training', () => {
  it('test', async () => {
    const customers = await getCustomers();
    expect(customers).toBeTruthy();
  });
});