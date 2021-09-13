import logo from '../../assets/Logo_ML.png'
import searchImg from '../../assets/ic_Search.png'
import './NavigationBar.scss'

import React, { useState } from 'react'

const NavigationBar = ({ onSearchClick }) => {
  var [search, setSearch] = useState('')

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearchClick = () => {
    onSearchClick(search)
  }
  
  const handleKeyPress = (e) => {
    if(e.key != "Enter")return
    onSearchClick(search)
  }

  return (
    <div className="yellow_theme">
      <div className="container d-flex align-items-center justify-items-center py-1">
        <img src={logo} alt="Mercado Livre Logo" className="px-2" />
        <div className="d-flex fullwidth">
          <input
            type="text"
            placeholder="Buscar productos, marcas y más..."
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
          />
          <button className="cursor-pointer" onClick={handleSearchClick}>
            <img src={searchImg} alt="Search button" className="px-2" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
