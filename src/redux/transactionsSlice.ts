import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Transaction} from "../types/Transaction";
import {TransactionsState} from "../types/TransactionsState";



const initialState: TransactionsState = {
    allTransactions: [],
    filteredTransactions: [],
    statusFilter: "",
    typeFilter: "",
};

const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        setTransactions(state, action: PayloadAction<Transaction[]>) {
            state.allTransactions = action.payload;
            state.filteredTransactions = action.payload;
        },
        addTransactions(state, action: PayloadAction<Transaction[]>) {
            state.allTransactions = [...state.allTransactions, ...action.payload];
            state.filteredTransactions = [...state.allTransactions];
        },
        updateTransactionStatus(state, action: PayloadAction<{ TransactionId: string, Status: string }>) {
            state.allTransactions = state.allTransactions.map(t => t.TransactionId === action.payload.TransactionId ?
                {...t, Status: action.payload.Status} : t);
            state.filteredTransactions =
                state.filteredTransactions.map(t => t.TransactionId === action.payload.TransactionId ?
                    {...t, Status: action.payload.Status} : t);
        },
        deleteTransactions(state, action: PayloadAction<string>) {
            state.allTransactions = state.allTransactions.filter(t => t.TransactionId !== action.payload);
            state.filteredTransactions = state.filteredTransactions.filter(t => t.TransactionId !== action.payload);
        },
        filterTransaction(state, action: PayloadAction<{ Status: string, Type: string }>) {
            state.statusFilter = action.payload.Status;
            state.typeFilter = action.payload.Type;
            state.filteredTransactions = state.allTransactions.filter(t =>
                //if no filter option selected - return true, means return all items and don't apply filtration
                (state.statusFilter ? t.Status === state.statusFilter : true) &&
                (state.typeFilter ? t.Type === state.typeFilter : true
                )
            );
        },

    },
});


export const {setTransactions, updateTransactionStatus, deleteTransactions, addTransactions, filterTransaction} = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;