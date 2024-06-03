import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {transactions} from "./mockData";

const mock = new MockAdapter(axios);
export const url = '/api/transactions';

mock.onGet(url).reply(200, transactions);