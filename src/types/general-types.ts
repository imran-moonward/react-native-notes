export type CategoryType =
  | 'Goal Evidence'
  | 'Support Coordination'
  | 'Active Duty';

export type Client = {
  id: number;
  name: string;
};

export type Note = {
  id: number;
  client: Client;
  category: CategoryType;
  note: string;
};
