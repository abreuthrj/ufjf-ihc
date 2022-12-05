import { IDonation } from "../@types/donation";

const DonationsMock: IDonation[] = [
  {
    id: "7304aa52-fd52-4ed7-a169-e475e245b81b",
    date: new Date(1670249559344),
    items: ["meia", "camisa"],
    status: "waiting",
  },
  {
    id: "9de54666-4851-49f1-9d3f-4cb8c61f5af6",
    date: new Date(1670249596955),
    items: ["boné", "tenis"],
    status: "analysing",
  },
];

export default DonationsMock;
