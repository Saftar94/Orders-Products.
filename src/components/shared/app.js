import { v4 as uuidv4 } from "uuid";
import MonitorPhoto from "../svg&image/image/Monitor.jpeg";

export const orders = [
  {
    id: uuidv4(),
    title: "Приход от компании Apple",
    date: "2017 / APR / 29",
    price: [
      { value: 100, symbol: "$", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    description: "desc",
    get products() {
      return products;
    },
  },
  {
    id: uuidv4(),
    title: "Приход от компании  Tesla",
    date: "2017 / JUN / 29",
    price: [
      { value: 100, symbol: "$", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    description: "desc",
    get products() {
      return products;
    },
  },
  {
    id: uuidv4(),
    title: "Приход от компании  Asus",
    date: "2017 / AUG / 29",
    price: [
      { value: 100, symbol: "$", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    description: "desc",
    get products() {
      return products;
    },
  },
  {
    id: uuidv4(),
    title: "Приход от компании NVIDIA",
    date: "2017 / AUG / 29",
    price: [
      { value: 100, symbol: "$", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    description: "desc",
    get products() {
      return products;
    },
  },
];

export const products = [
  {
    id: uuidv4(),
    serialNumber: "SN-12.3456789",
    isNew: 1,
    photo: MonitorPhoto,
    title: "Gigabute Techmology X58-USB3(Socket 1366)6 X58-USB3",
    type: "Monitors",
    specification: "Specification 1",
    guarantee: {
      start: "06 / 04 / 2017",
      end: "06 / 08 / 2025",
    },
    price: [
      { value: 100, symbol: "$", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: orders[0].id,
    date: "2017 / JUN / 29",
  },
  {
    id: uuidv4(),
    serialNumber: "SN-12.3456789",
    isNew: 0,
    photo: MonitorPhoto,
    title: "Gigabute Techmology X58-USB3(Socket 1366)6 X58-USB3",
    type: "Monitors",
    specification: "Specification 2",
    guarantee: {
      start: "06 / 04 / 2017",
      end: "06 / 08 / 2025",
    },
    price: [
      { value: 100, symbol: "$", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: orders[0].id,
    date: "2017 / AUG / 29",
  },
  {
    id: uuidv4(),
    serialNumber: "SN-12.3456789",
    isNew: 1,
    photo: MonitorPhoto,
    title: "Gigabute Techmology X58-USB3(Socket 1366)6 X58-USB3",
    type: "Processes",
    specification: "Specification 2",
    guarantee: {
      start: "06 / 04 / 2017",
      end: "06 / 08 / 2025",
    },
    price: [
      { value: 100, symbol: "$", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: orders[1].id,
    date: "2017 / JUN / 29",
  },
  {
    id: uuidv4(),
    serialNumber: "SN-12.3456789",
    isNew: 1,
    photo: MonitorPhoto,
    title: "Gigabute Techmology X58-USB3(Socket 1366)6 X58-USB3",
    type: "Monitors",
    specification: "Specification 3",
    guarantee: {
      start: "06 / 04 / 2017",
      end: "06 / 08 / 2025",
    },
    price: [
      { value: 100, symbol: "$", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: orders[2].id,
    date: "2017 / MAR / 29",
  },
  {
    id: uuidv4(),
    serialNumber: "SN-12.3456789",
    isNew: 0,
    photo: MonitorPhoto,
    title: "Gigabute Techmology X58-USB3(Socket 1366)6 X58-USB3",
    type: "Processes",
    specification: "Specification 3",
    guarantee: {
      start: "06 / 04 / 2017",
      end: "06 / 08 / 2025",
    },
    price: [
      { value: 100, symbol: "$", isDefault: 0 },
      { value: 2600, symbol: "UAH", isDefault: 1 },
    ],
    order: orders[3].id,
    date: "2017 / DEC / 29",
  },
];
