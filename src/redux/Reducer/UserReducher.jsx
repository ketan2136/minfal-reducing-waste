import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Firestore, addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firbase";

const initialState = {
    isLoading: false,
    conractData: [],
    error: null
}


export const contactAddData = createAsyncThunk(
    'contact/addData',
    async (data) => {
        try {
            const docRef = await addDoc(collection(db, "test"), data);
            return {
                id: docRef.id,
                ...data
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
);

export const contactGetData = createAsyncThunk(
    'contact/get',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "test"));
            let data = [];
            querySnapshot.forEach((doc) => {
                console.log(doc.id);
                data.push({
                    id: doc.id,
                    ...doc.data()
                })
                console.log(data);
            });
            return data;
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)

const pending = (state, action) => {
    state.isLoading = true;
    state.error = null;
}

const rejected = (state, action) => {
    state.isLoading = false;
    state.error = action.error.message;
}

const userSlice = createSlice({
    name: 'test',
    initialState, // Use initialState here
    extraReducers: (builder) => {
        builder
            .addCase(contactAddData.pending, pending)
            .addCase(contactAddData.fulfilled, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.conractData = state.conractData.concat(action.payload)
            })
            .addCase(contactGetData.pending, pending)
            .addCase(contactGetData.fulfilled, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.conractData = action.payload
            })
    }
});

export default userSlice.reducer;
