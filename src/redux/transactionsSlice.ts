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
        addTransactions(state, action: PayloadAction<Transaction[]>) {
            state.allTransactions = [...state.allTransactions, ...action.payload];
            state.filteredTransactions = [...state.allTransactions, ...action.payload];
        },
        updateTransactionStatus(state, action: PayloadAction<{ TransactionId: number, Status: string }>) {
            state.allTransactions = state.allTransactions.map( t => t.TransactionId === action.payload.TransactionId ? {...t, Status: action.payload.Status} : t);
            state.filteredTransactions = state.filteredTransactions.map( t => t.TransactionId === action.payload.TransactionId ? {...t, Status: action.payload.Status} : t);
        },
        deleteTransactions(state, action: PayloadAction<number>) {
            state.allTransactions = state.allTransactions.filter( t => t.TransactionId !== action.payload);
            state.filteredTransactions = state.filteredTransactions.filter( t => t.TransactionId !== action.payload );
        },
    }
});


export const { setTransactions, updateTransactionStatus, deleteTransactions, addTransactions } = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;