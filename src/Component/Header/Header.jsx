import React from 'react'
import './Header.css'

// import components
import { FaSearch } from 'react-icons/fa'
import { FaShoppingBag } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header class="main-header">
      <a class="main-header__continer__logo">
        <img src="./img/logo1.png" alt="logo" class="logo" />
      </a>
      <nav>
        <ul class="nav-lists">
          <li class="nav-list nav-list_active">
            <Link to="/">home</Link>
          </li>
          <li class="nav-list">
            <Link to="#">shop </Link>
          </li>
          <li class="nav-list">
            <a href="#">blog </a>
          </li>
          <li class="nav-list">
            <a href="#">about</a>
          </li>
          <li class="nav-list">
            <a href="#">contact Us</a>
          </li>
          <li class="nav-list">
            <a href="#">
              <FaSearch />
            </a>
          </li>
          <li class="nav-list">
            <a href="#">
              <FaShoppingBag />
            </a>
          </li>
        </ul>
      </nav>
      <div class="hamberger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </header>
  )
}

export default Header
