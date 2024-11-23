interface ITransactionResumed {
  id: string;
  date: string;
  type: string;
  amount: number;
  currency: string;
  status: string;
  description: string;
}

export default ITransactionResumed;
