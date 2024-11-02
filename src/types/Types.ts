type DT = {
    tourId: number;
    name: string;
    date: string;
    time: string;
    description: string;
  };

  type ER = {
    message: string;
    stack: string;
  };

  interface FetchResultBN<T> {
    data: T | null;
    loading: boolean;
    error: ER | null;
  }