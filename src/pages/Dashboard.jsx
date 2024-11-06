import React, { useContext } from 'react'
import DashboardMenu from '../components/DashboardComponents/DashboardMenu'
import { Routes, Route } from 'react-router-dom'
import DashboardHome from '../components/DashboardComponents/DashboardHome'
import DashboardProfile from '../components/DashboardComponents/DashboardProfile'
import DashboardSettings from '../components/DashboardComponents/DashboardSettings'
import { SolutionContext } from '../context/SolutionContext'
import SellerForm from '../components/DashboardComponents/Seller/SellerForm'
import { RiMenu3Fill } from 'react-icons/ri'
import ShowcaseForm from '../components/DashboardComponents/Showcase/ShowcaseForm'

const Dashboard = () => {

    const {hide, setHide} = useContext(SolutionContext)

    return (
        <div className='h-screen flex gap-2 pt-20'>
            <div className={`fixed top-40 left-0 border-2 border-black ${hide && "hidden"} cursor-pointer`} onClick={() => setHide(true)}>
                <RiMenu3Fill size={28} />
            </div>
            <div className={`${!hide && "hidden"} h-full absolute lg:relative min-w-[300px] max-w-[300px]`}>
                <DashboardMenu />
            </div>
            <div className="h-full overflow-auto w-full">
                <Routes>
                    <Route index element={<DashboardHome />} />
                    <Route path='home' element={<DashboardHome />} />
                    <Route path='profile' element={<DashboardProfile />} />
                    <Route path='settings' element={<DashboardSettings />} />
                    <Route path='seller/*' element={<SellerForm />} />
                    <Route path='showcase/*' element={<ShowcaseForm />} />
                </Routes>
            </div>
        </div>
    )
}

export default Dashboard