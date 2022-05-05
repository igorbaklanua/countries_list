import React from 'react'

const Header = ({onSorted}) => {
    return (<>
            <h1 className='text-primary'>List of countries</h1>
            <div>
                <button className='btn btn-secondary ms-2' onClick={() => onSorted('A_Z')}>A-Z</button>
                <button className='btn btn-secondary ms-2' onClick={() => onSorted('Z_A')}>Z-A</button>
                <button className='btn btn-secondary ms-2' onClick={() => onSorted('smallerThanLithuania')}>Smaller
                    than Lithuania
                </button>
                <button className='btn btn-secondary ms-2' onClick={() => onSorted("Oceania")}>Oceania</button>
            </div>
        </>
    )
}

export default Header