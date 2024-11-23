import ITransactionResumed from './ITransactionResumed';

interface ITransaction extends ITransactionResumed {
  fromAccount: Account;
  toAccount: Account;
  fee: number;
  creditCard: CreditCard;
}

interface Account {
  name: string;
  accountNumber: string;
}

interface CreditCard {
  number: string;
  brand: string;
}

export default ITransaction;
