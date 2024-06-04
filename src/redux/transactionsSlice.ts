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
            state.filteredTransactions = action.payload;
        },
        deleteTransactions(state, action: PayloadAction<number>) {
            state.allTransactions = state.allTransactions.filter( t => t.id !== action.payload);
            state.filteredTransactions = state.filteredTransactions.filter( t => t.id !== action.payload );
        },
    }
});


export const { setTransactions, deleteTransactions } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;