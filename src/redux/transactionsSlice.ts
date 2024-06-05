import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Transaction} from "../types/Transaction";

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
        updateTransactionStatus(state, action: PayloadAction<{ TransactionId: number, Status: string }>) {
            state.allTransactions = state.allTransactions.map(t => t.TransactionId === action.payload.TransactionId ?
                {...t, Status: action.payload.Status} : t);
            state.filteredTransactions =
                state.filteredTransactions.map(t => t.TransactionId === action.payload.TransactionId ?
                    {...t, Status: action.payload.Status} : t);
        },
        deleteTransactions(state, action: PayloadAction<number>) {
            state.allTransactions = state.allTransactions.filter(t => t.TransactionId !== action.payload);
            state.filteredTransactions = state.filteredTransactions.filter(t => t.TransactionId !== action.payload);
        },
        filterTransaction(state, action: PayloadAction<{ Status: string, Type: string }>) {
            state.statusFilter = action.payload.Status;
            state.typeFilter = action.payload.Type;
            state.filteredTransactions =  state.allTransactions.filter(t =>
                //if no filter option selected - return true, means return all items and don't apply filtration
                (state.statusFilter ? t.Status === state.statusFilter : true) &&
                (state.typeFilter ? t.Type === state.typeFilter : true
                )
            );
            console.log(state.filteredTransactions)
        },

    },
});


export const {setTransactions, updateTransactionStatus, deleteTransactions, addTransactions, filterTransaction} = transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;