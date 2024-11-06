// import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import data from "../data/productsdata.json"
import {toast} from "react-toastify"
// import {axios} from "axios";

export const SolutionContext = createContext()

export const SolutionProvider = ({ children }) => {

  const [productItem, setProductItem] = useState("")
  const [cartItems, setCartItems] = useState([])
  const [numCost, setNumCost] = useState([])
  const [categoryQuery, setCategoryQuery] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [order, setOrder] = useState("oldtonew")
  const [hide, setHide] = useState(true)
  const [authType, setAuthType] = useState("login")
  const [loggedIn, setLoggedIn] = useState(true)
  // const [token, setToken] = useState(localStorage.getItem('token') || null);
  

  // const registerUser = async (userData) => {
  //   try {
  //     const response = await axios.post('/api/auth/register', userData);
  //     return response.data;
  //   } catch (error) {
  //     console.error("Registration failed:", error.response.data.message);
  //     throw error;
  //   }
  // };

  // const loginUser = async (credentials) => {
  //   try {
  //     const response = await axios.post('/api/auth/login', credentials);
  //     const { token } = response.data;
  //     setToken(token);
  //     setLoggedIn(true);
  //     localStorage.setItem('token', token); // Store token for persistence
  //     return response.data;
  //   } catch (error) {
  //     console.error("Login failed:", error.response.data.message);
  //     throw error;
  //   }
  // };

  // const logoutUser = () => {
  //   setToken(null);
  //   setLoggedIn(false);
  //   localStorage.removeItem('token');
  // };


  // const registerUser = async (userData) => {
  //   try {
  //     const response = await axios.post('http://localhost:5000/api/auth/register', userData);
  //     toast.success(response.data.message || "Registration successful");
  //     return response.data;
  //   } catch (error) {
  //     console.error("Registration failed:", error.response?.data?.message || error.message);
  //     toast.error(error.response?.data?.message || "Registration failed");
  //     throw error;
  //   }
  // };

  // const loginUser = async (credentials) => {
  //   try {
  //     const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
  //     const { token } = response.data;
  //     setToken(token);
  //     setLoggedIn(true);
  //     localStorage.setItem('token', token); // Store token for persistence
  //     toast.success(response.data.message || "Login successful");
  //     return response.data;
  //   } catch (error) {
  //     console.error("Login failed:", error.response?.data?.message || error.message);
  //     toast.error(error.response?.data?.message || "Login failed");
  //     throw error;
  //   }
  // };

  // const logoutUser = () => {
  //   setToken(null);
  //   setLoggedIn(false);
  //   localStorage.removeItem('token');
  //   toast.success("Logged out successfully");
  // };

  const handleProductCategory = (e) => {
    setCategoryQuery(e.target.value)
  }

  const handleProductOrder = (e) => {
    setOrder(e.target.value)
  }

  const handleProductSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleAddToCart = (i) => {
    const newItem = data.find((item) => item.id === i)
    setCartItems(prevCartItems => [...prevCartItems, newItem])
    setNumCost(prevNumCost => [...prevNumCost, { count: 1, cost: newItem['cost'] }])
    toast.success("Successfully Added To Cart", 
      {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
      }
    )
  }

  const handleRemoveFromCart = (i) => {
    const newCartItems = cartItems.filter((item) => item.id !== i)
    setCartItems(newCartItems)
    setNumCost(prevNumCost => prevNumCost.filter((_, index) => index !== i))
    toast.success("Successfully Removed From Cart", 
      {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
      }
    )
  }

  const handleCart = () => {
    if (cartItems.includes(productItem)) {
      handleRemoveFromCart(productItem.id)
      
    } else {
      handleAddToCart(productItem.id)
      
    }
  }

  const handleIncrement = (index) => {
    setNumCost(prevNumCost => {
      const updatedNumCost = [...prevNumCost]

      updatedNumCost[index].count += 1

      return updatedNumCost
    })
  }

  const handleDecrement = (index) => {
    setNumCost(prevNumCost => {
      const updatedNumCost = [...prevNumCost]

      if (updatedNumCost[index].count > 1) {
        updatedNumCost[index].count -= 1
      }

      return updatedNumCost
    })
  }

  const getItemTotalCost = (index) => {
    const item = numCost[index]
    return item.count * item.cost
  }

  const getTotalCost = () => {
    return numCost.reduce((total, item) => {
      return total + item.count * item.cost
    }, 0)
  }

  // useEffect(() => {
  //   if (token) setLoggedIn(true);
  // }, [token]);

  const value = {
    productItem,
    setProductItem,
    cartItems,
    setCartItems,
    handleCart,
    numCost, 
    handleProductCategory, 
    handleProductOrder, 
    categoryQuery, 
    order, 
    searchQuery, 
    handleProductSearch, 
    loggedIn, 
    setLoggedIn,
    handleRemoveFromCart, 
    handleIncrement, 
    handleDecrement, 
    getItemTotalCost, 
    getTotalCost, 
    hide, 
    setHide, 
    authType, 
    setAuthType
  }

  return (
    <SolutionContext.Provider value={value}>
      {children}
    </SolutionContext.Provider>
  )
}