import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
  type Dispatch
} from '@reduxjs/toolkit';
import { type RootState } from '../store';
interface IState {
  data: ILocalStorageValue[];
}

function getFromLocalStorage(name: string) {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem(name) ?? '[]');
  } else {
    return [];
  }
}
const initialState: IState = {
  data: getFromLocalStorage('cart')
};

export const addFavoriteBook = createAsyncThunk<
  any,
  string,
  { state: RootState; dispatch?: Dispatch }
>('basket/addFavoriteBook', async (id, { getState, dispatch }) => {
  const findItem = getState().basket.data.find((el) => el.id === id);
  if (findItem) {
    dispatch(plusBook(id));
  } else {
    dispatch(addBook(id));
  }
  dispatch(() => {
    localStorage.setItem('cart', JSON.stringify(getState().basket.data));
  });
});

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addBook(state, action: PayloadAction<string>) {
      state.data.push({ id: action.payload, amount: 1 });
    },
    plusBook(state, action: PayloadAction<string>) {
      const findItem = state.data.find((el) => el.id === action.payload);
      if (findItem) {
        findItem.amount++;
      }
    }
  }
  // extraReducers: (builder) => {
  //   builder.addCase(addFavoriteBook.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //   });
  //   builder.addCase(addFavoriteBook.pending, (state) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(addFavoriteBook.rejected, (state, action) => {
  //     state.isLoading = false;
  //   });
  // }
});
export const { addBook, plusBook } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
