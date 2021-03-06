import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';


const SearchBar = () => {

    useEffect(() => {
        AOS.init()
        AOS.refresh()
    }, [])

    return (
        <>
            <div className='flex flex-row py-16 items-center justify-content mx-auto'>

                <div className=''>
                    dropdown
                </div>

                <div className=''>
                    input field
                </div>

                <div className=''>
                    button
                </div>

            </div>
        </>
    )
}

export default SearchBar;