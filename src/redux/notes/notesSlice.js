import { createSlice } from "@reduxjs/toolkit";
export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    items: [
      { id: "1", title: "Deneme", completed: true, color: "rgb(79, 139, 234)" },
      {
        id: "2",
        title: "Deneme2",
        completed: false,
        color: "rgb(234, 234, 79)",
      },
      {
        id: "3",
        title: "Deneme3",
        completed: false,
        color: "rgb(234, 79, 118)",
      },
      {
        id: "4",
        title: "Deneme4",
        completed: false,
        color: "rgb(234, 79, 213)",
      },
    ],
    filterText: "",
  },
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    setFilterText: (state, action) => {
      state.filterText = action.payload;
    },
  },
});
export const { addNote, destroy, setFilterText } = notesSlice.actions;
export default notesSlice.reducer;
