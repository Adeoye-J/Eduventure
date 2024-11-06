import React, { useContext } from 'react'
import { SolutionContext, SolutionProvider } from './context/SolutionContext'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Footer from './components/Footer'
import './App.css'
import ProductDetails from './components/ProductComponents/ProductDetails'
import Carts from './components/Carts/Carts'
import Shipping from './components/Carts/Shipping'
import ScrollToTop from './components/ScrollToTop'
import Checkout from './components/Carts/Checkout'
import Services from './pages/Services'
import ServiceDetails from './components/ServicesComponent/ServiceDetails'
import Dashboard from './pages/Dashboard'
import Authentication from './components/Authentication'
import PrivateRoute from './components/PrivateRoute'
// import DashboardHome from './components/DashboardComponents/DashboardHome'

function App() {

  return (
    <div className='max-w-[1700px]'>
      <ScrollToTop />
      <SolutionProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path='/productdetails/:id' element={<ProductDetails />} />
          <Route path='/carts' element={<PrivateRoute><Carts/></PrivateRoute>} />
          <Route path='/shipping' element={<PrivateRoute><Shipping /></PrivateRoute>} />
          <Route path='/checkout' element={<PrivateRoute><Checkout /></PrivateRoute>} />
          <Route path='/dashboard/*' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path='/auth' element={<Authentication />} />
          {/* <Route path='/dashboard/home' element={<DashboardHome />} /> */}
        </Routes>
        <Footer />
      </SolutionProvider>
    </div>
  )
}

export default App
