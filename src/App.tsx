import React, { useEffect, useState } from 'react';
import { Transaction, PaginationProps } from './types';
import TransactionList from './components/TransactionList';
import { getTransactions } from './services/transactions';
import './App.css';
import Pagination from './components/Pagination';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [pagination, setPagination] = useState<PaginationProps<Transaction>>({
    limit: 10,
    offset: 0,
    totalCount: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);

  const getTrxs = async (pagination: PaginationProps<Transaction>) => {
    const trxs = await getTransactions(pagination)
    setTransactions(trxs.data ?? [])
    setPagination(trxs)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    getTrxs(pagination)
  }, [])

  const updateSelectedPage = (selectedPage: number) => {
    setLoading(true)
    const newPagination = {...pagination, offset: selectedPage - 1 };
    setPagination(newPagination);
    getTrxs(newPagination);
  }

  return (
    <div>
      {loading && "Loading..."}
      {!loading && <TransactionList transactions={transactions} />}
      <Pagination 
        limit={pagination.limit} 
        totalCount={pagination.totalCount ?? 0}
        currentPage={pagination.offset + 1}
        onPageChange={updateSelectedPage}
      />
    </div>
  );
}

export default App;
