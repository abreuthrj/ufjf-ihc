export type IDonation = {
  date: Date;
  items: string[];
  id: string;
  status: "waiting" | "analysing" | "complete" | "refused";
};
