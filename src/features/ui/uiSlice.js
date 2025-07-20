import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMenuOpen: false,
  activeSection: 'home',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, setActiveSection } = uiSlice.actions;
export default uiSlice.reducer;
