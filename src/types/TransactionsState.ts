import {Transaction} from "./Transaction";

export interface TransactionsState {
    allTransactions: Transaction[];
    filteredTransactions: Transaction[];
    statusFilter: string;
    typeFilter: string;
}