export type IDonation = {
  date: Date;
  items: IDonationItem[];
  id: string;
  status: "na fila" | "em análise" | "completa" | "recusada";
  deliverMethod: "donator" | "employee";
  deliverLocation?: string;
};

export type IDonationItem = {
  id: string;
  title: string;
  qtd?: number;
  gender?: string;
};
