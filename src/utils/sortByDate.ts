import ITransactionResumed from '../services/contracts/ITransactionResumed';

export const sortByDate = (
  items: ITransactionResumed[],
  order: 'asc' | 'desc' = 'asc',
): ITransactionResumed[] => {
  return items.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    if (order === 'asc') {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });
};
