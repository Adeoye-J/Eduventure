import React from 'react'

const Services = () => {


    return (
        <div className='max-w-[1700px]'>
        <ScrollToTop />
        <SolutionProvider>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path='/productdetails/:id' element={<ProductDetails />} />
                <Route path='/carts' element={<Carts/>} />
                <Route path='/shipping' element={<Shipping />} />
                <Route path='/checkout' element={<Checkout />} />
            </Routes>
            <Footer />
        </SolutionProvider>
    </div>
    )
}

export default Services