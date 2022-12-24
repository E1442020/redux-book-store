import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getBooks= createAsyncThunk('book/getBooks', async (_,thunkAPI)=>{
    try{
        const res =await fetch(' http://localhost:3006/books');
        const data = await res.json();
        return data;
    } catch(error){
        console.log(error);
    }
})

export const insertBooks= createAsyncThunk('book/insertBooks', async (bookData,thunkAPI)=>{
    const {getState}=thunkAPI;
    try{
        bookData.userName=getState().auth.name
        const res =await fetch(' http://localhost:3006/books',{
            method: 'POST',
            body: JSON.stringify(bookData),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },        });
            const data = await res.json();
        return data;
       
         } catch(error){
        console.log(error);
    }
})

export const deleteBooks= createAsyncThunk('book/deleteBooks', async (id,thunkAPI)=>{
   
    try{
        
        const res =await fetch(`http://localhost:3006/books/${id}`,{
            method: 'DELETE',
           
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },        });
          
        return id;
       
         } catch(error){
        console.log(error);
    }
})

export const BookSlice = createSlice({
    name: 'book',

    initialState: { books:[],isLoading:false},
   extraReducers:{
    [getBooks.pending]:(state,action)=>{
        state.isLoading=true;
        console.log(action)
},


        [getBooks.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.books=action.payload
   },


   [getBooks.rejected]:(state,action)=>{
    state.isLoading=false;
    console.log(action)
},

//insert book

[insertBooks.pending]:(state,action)=>{
    state.isLoading=true;
},

[insertBooks.fulfilled]:(state,action)=>{
    state.isLoading=false;
    state.books.push(action.payload);
},

[insertBooks.rejected]:(state,action)=>{
    state.isLoading=true;
},

//delete book

[deleteBooks.pending]:(state,action)=>{
    state.isLoading=true;
},

[deleteBooks.fulfilled]:(state,action)=>{
    state.isLoading=false;
    state.books=state.books.filter((el)=>el.id !== action.payload);
    console.log(action.payload);
   
},

[deleteBooks.rejected]:(state,action)=>{
    state.isLoading=true;
},


},




})

export default BookSlice.reducer