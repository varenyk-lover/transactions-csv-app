import axios from "axios";
import {url} from "./mockApi";

export const fetchTransactions = async () => {
    const {data} = await axios.get(url);
    return data;
};