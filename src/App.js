import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SideMenu from "./components/SideMenu/SideMenu.component.jsx";
import FavoritesContextProvider from "./utils/contexts/FavoritesContext.js";
import ThemeContextProvider from "./utils/contexts/ThemeContext.js";
import About from "./pages/About.page.js";
import Home from './pages/Home.page.js'
import MyFavorites from "./pages/MyFavorites.page.js";
import NotFound from './pages/NotFound.page.js'
import SingleItem from "./pages/SingleItem.page.js";
import Themes from "./pages/Themes.page.js";


function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <FavoritesContextProvider>
          <SideMenu/>
          <Routes>
            <Route path='*' element={<NotFound/>} />
            <Route path='/' element={<Home/>} />
            <Route path='/pokemon/:id' element={<SingleItem/>} />
            <Route path='/favorites' element={<MyFavorites/>} />
            <Route path='/themes' element={<Themes/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </FavoritesContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;
