import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Transaction } from "../types/Transaction";

interface TransactionsState {
    allTransactions: Transaction[];
    filteredTransactions: Transaction[];
    statusFilter: string;
    typeFilter: string;
}

const initialState: TransactionsState = {
    allTransactions: [],
    filteredTransactions: [],
    statusFilter: "",
    typeFilter: "",
};

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        setTransactions(state, action: PayloadAction<Transaction[]>) {
            state.allTransactions = action.payload;
            // state.filteredTransactions = action.payload;
        }
    }
});


export const { setTransactions } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;