import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const LayoutTwo = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}

        </>
    )
}

export default LayoutTwo