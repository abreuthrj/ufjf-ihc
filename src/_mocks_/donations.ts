import { IDonation } from "../@types/donation";

const DonationsMock: IDonation[] = [
  {
    id: "7304aa52-fd52-4ed7-a169-e475e245b81b",
    date: new Date(1670249559344),
    deliverMethod: "donator",
    items: [
      {
        id: "72ae24c8-d77e-4c3a-b337-d7961dd04992",
        title: "meia",
        qtd: 1,
        gender: "male",
      },
      {
        id: "5a2c3bd8-494c-40e2-9be6-44c1dfcc8e85",
        title: "camisa",
        qtd: 1,
        gender: "male",
      },
    ],
    status: "na fila",
  },
  {
    id: "9de54666-4851-49f1-9d3f-4cb8c61f5af6",
    date: new Date(1670249596955),
    deliverMethod: "employee",
    deliverLocation: "Av. Rio Branco, 1347",
    items: [
      {
        id: "98b185ff-df9e-4958-8d55-bc245714707a",
        title: "boné",
        qtd: 1,
        gender: "male",
      },
      {
        id: "9089141b-9ed8-4a75-9563-09b2d1f247a4",
        title: "tenis",
        qtd: 1,
        gender: "female",
      },
    ],
    status: "em análise",
  },
  {
    id: "fb8b8871-e284-4d56-b5eb-8f04049a5bd8",
    date: new Date(1670696226689),
    deliverMethod: "employee",
    deliverLocation: "Rua Halfeld, 32",
    items: [
      {
        id: "cdd6cb6d-ab1e-4232-b504-96fd3a31a2eb",
        title: "luva",
        qtd: 1,
        gender: "female",
      },
      {
        id: "72ae24c8-d77e-4c3a-b337-d7961dd04992",
        title: "meia",
        qtd: 1,
        gender: "male",
      },
    ],
    status: "completa",
  },
  {
    id: "2bd3d502-f0b6-4f42-b21e-706d1d68f422",
    date: new Date(1670696256016),
    deliverMethod: "donator",
    items: [
      {
        id: "b6f8c0e1-5a62-4f91-93d3-badda25d3383",
        title: "sandália",
        qtd: 1,
        gender: "male",
      },
      {
        id: "b471109e-7632-40ef-9b7f-5e89f95ae66d",
        title: "sapato",
        qtd: 1,
        gender: "female",
      },
    ],
    status: "recusada",
  },
  {
    id: "fb44e6d8-1e88-4d35-be8a-ba2561335224",
    date: new Date(1670697047002),
    deliverMethod: "donator",
    items: [
      {
        id: "0c59c062-8ce8-4cd2-ab8a-36ffa96d10c1",
        title: "edredom",
        qtd: 1,
        gender: "female",
      },
      {
        id: "7f46a7f9-be10-4e8e-b55e-894a9c4f6639",
        title: "toalha",
        qtd: 1,
        gender: "male",
      },
    ],
    status: "em análise",
  },
  {
    id: "c3b6c79c-8349-4108-a990-73b61aee700a",
    date: new Date(1670697048794),
    deliverMethod: "employee",
    deliverLocation: "Av. Presidente Itamar Franco 2204",
    items: [
      {
        id: "94d61185-dac2-4ab4-8f2c-e3dceaa8939e",
        title: "cobertor",
        qtd: 1,
        gender: "male",
      },
      {
        id: "b471109e-7632-40ef-9b7f-5e89f95ae66d",
        title: "sapato",
        qtd: 1,
        gender: "male",
      },
    ],
    status: "em análise",
  },
];

export default DonationsMock;
