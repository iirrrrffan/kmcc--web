import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import HeadOne from '../user/components/Head/HeadOne'
import UNav from '../user/components/UNav'

const LayoutTwo = () => {
    return (
        <>
            <UNav/>
            <Outlet />
        </>
    )
}

export default LayoutTwo