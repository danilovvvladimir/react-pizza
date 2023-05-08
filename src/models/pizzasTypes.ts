export enum PizzasFetchStatus {
  LOADING = "loading",
  ERROR = "error",
  SUCCESS = "success",
}

export type Pizza = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};

export interface PizzaSliceState {
  items: Pizza[];
  status: PizzasFetchStatus;
}

export type SearchPizzaParams = {
  sortBy: string;
  order: string;
  category: string;
  currentPage: number;
  // search: string;
};
