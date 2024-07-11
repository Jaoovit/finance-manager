import { createSlice } from "@reduxjs/toolkit";
import db from "../db/Db";

const infoSlice = createSlice({
    name: "info",
    initialState: db,
    reducer: {

    }
})

export default infoSlice.reducer