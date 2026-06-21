export interface Expense {
  id: string;
  name: string;
  amount: number;
  paidBy: string;
}

export interface ActivityVote {
  id: string;
  activityName: string;
  votes: number;
}