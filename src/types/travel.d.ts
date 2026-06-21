export interface TripData {
  itinerary: { time: string; event: string }[];
  budget: { item: string; cost: number; paidBy: string }[];
  votes: { activity: string; votes: number }[];
}