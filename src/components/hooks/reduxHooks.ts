import store from "../../redux/store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useTSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTDispatch = useDispatch as () => AppDispatch;