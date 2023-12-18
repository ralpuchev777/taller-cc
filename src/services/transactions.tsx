import { PaginationProps, Transaction } from "../types";


export const mockTransactions: Transaction[] = [
    { id: '1', date: '2023-12-27', description: 'Transaction 1', amount: 300 },
    { id: '2', date: '2023-12-29', description: 'Transaction 2', amount: 900 },
    { id: '3', date: '2023-12-15', description: 'Transaction 3', amount: 100 },
    { id: '4', date: '2023-12-17', description: 'Transaction 4', amount: 600 },
    { id: '5', date: '2023-12-23', description: 'Transaction 5', amount: 1000 },
    { id: '6', date: '2023-12-06', description: 'Transaction 6', amount: 1000 },
    { id: '7', date: '2023-12-31', description: 'Transaction 7', amount: 100 },
    { id: '8', date: '2023-12-19', description: 'Transaction 8', amount: 1000 },
    { id: '9', date: '2023-12-10', description: 'Transaction 9', amount: 500 },
    { id: '10', date: '2023-12-06', description: 'Transaction 10', amount: 700 },
    { id: '11', date: '2023-12-02', description: 'Transaction 11', amount: 500 },
    { id: '12', date: '2023-12-03', description: 'Transaction 12', amount: 600 },
    { id: '13', date: '2023-12-20', description: 'Transaction 13', amount: 900 },
    { id: '14', date: '2023-12-21', description: 'Transaction 14', amount: 400 },
    { id: '15', date: '2023-12-10', description: 'Transaction 15', amount: 700 },
    { id: '16', date: '2023-12-25', description: 'Transaction 16', amount: 1000 },
    { id: '17', date: '2023-12-09', description: 'Transaction 17', amount: 300 },
    { id: '18', date: '2023-12-26', description: 'Transaction 18', amount: 800 },
    { id: '19', date: '2023-12-05', description: 'Transaction 19', amount: 300 },
    { id: '20', date: '2023-12-06', description: 'Transaction 20', amount: 200 },
    { id: '21', date: '2023-12-16', description: 'Transaction 21', amount: 1000 },
    { id: '22', date: '2023-12-30', description: 'Transaction 22', amount: 700 },
    { id: '23', date: '2023-12-28', description: 'Transaction 23', amount: 100 },
    { id: '24', date: '2023-12-13', description: 'Transaction 24', amount: 800 },
    { id: '25', date: '2023-12-03', description: 'Transaction 25', amount: 600 },
    { id: '26', date: '2023-12-08', description: 'Transaction 26', amount: 700 },
    { id: '27', date: '2023-12-09', description: 'Transaction 27', amount: 800 },
    { id: '28', date: '2023-12-10', description: 'Transaction 28', amount: 600 },
    { id: '29', date: '2023-12-24', description: 'Transaction 29', amount: 200 },
    { id: '30', date: '2023-12-14', description: 'Transaction 30', amount: 100 },
    { id: '31', date: '2023-12-02', description: 'Transaction 31', amount: 900 },
    { id: '32', date: '2023-12-29', description: 'Transaction 32', amount: 600 },
];

export const getTransactions = async ({ limit, offset }: PaginationProps<Transaction>): Promise<PaginationProps<Transaction>> => {
    return new Promise(resolve => {
        setTimeout(() => {
            const currentRecords = mockTransactions.slice(offset * limit, (offset + 1) * limit)
            resolve({
                limit,
                offset,
                totalCount: mockTransactions.length,
                data: currentRecords
            });
        }, 1000);
      });
}