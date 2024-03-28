import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Firestore, addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db, storage } from "../../firbase";

const initialState = {
    isLoading: false,
    conractData: [],
    error: null
}


export const contactAddData = createAsyncThunk(
    'contact/addData',
    async (data) => {
        console.log(data)
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

                data.push({
                    id: doc.id,
                    ...doc.data()
                })

            });
            return data;
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
)


export const contactDelete = createAsyncThunk(
    'contact/delete',
    async (data) => {
        console.log(data.id);
        try {
            await deleteDoc(doc(db, "test", data.id));
            console.log("deleted success");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        return data.id;
    }
)
export const contactUpdateData = createAsyncThunk(
    'contact/updateData',
    async (data) => {
        try {
            
            console.log(data.id);
            // Assuming you have a function in your Firestore setup to update documents
            await updateDoc(doc(db, "test",  data));
            
        } catch (e) {
            console.error("Error updating document: ", e);
            throw e; // Rethrow the error to be caught by the rejected action
        }
    }
);

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
                state.isLoading = false;
                state.conractData = state.conractData.concat(action.payload)
            })
            .addCase(contactGetData.pending, pending)
            .addCase(contactGetData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.conractData = action.payload
            })
            .addCase(contactDelete.pending, pending)
            .addCase(contactDelete.fulfilled, (state, action) => {
                console.log(action);
                state.isLoading = false;
                state.conractData = state.conractData.filter((v) => v.id !== action.payload);
            })
            .addCase(contactUpdateData.pending, pending)
            .addCase(contactUpdateData.fulfilled, (state, action) => {
                state.isLoading = false;
                // Find the index of the updated item
                const index = state.conractData.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    // Update the item in the array with the new data
                    state.conractData[index] = { ...state.conractData[index], ...action.payload.newData };
                }
            })
            .addCase(contactUpdateData.rejected, rejected);
    }
});

console.log(userSlice)

export default userSlice.reducer;


