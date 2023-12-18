import React from 'react';
import { Transaction } from '../types';

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  return (
    <div className="trx-item">
      <p>ID: {transaction.id}</p>
      <p>Date: {transaction.date}</p>
      <p>Description: {transaction.description}</p>
      <p>Amount: ${transaction.amount.toFixed(2)}</p>
    </div>
  );
};

export default TransactionItem;
