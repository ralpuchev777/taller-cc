export interface Transaction {
    id: string;
    date: string;
    description: string;
    amount: number;
  }
  
  export interface DateRange {
    startDate: string;
    endDate: string;
  }
  
  export interface PaginationProps<T> {
    limit: number;
    offset: number;
    totalCount?: number;
    data?: T[] | null;
  }