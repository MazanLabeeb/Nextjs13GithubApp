import Link from 'next/link'
import React from 'react'


const Header = () => {
    return (
        <header className='border-b-2 pb-2'>

            <h2 className='text-3xl font-bold text-center'>
                {/* <GitHubIcon className='text-5xl' />  */}
                Github Profile App - Nextjs 13</h2>

            <nav>
                <ul className='flex gap-3 items-center justify-center mt-2'>
                    <li>
                        <Link className=' text-blue-600 hover:underline' href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link className='text-blue-600 hover:underline' href={'/about'}>About Us</Link>
                    </li>
                    <li>
                        <Link className='text-blue-600 hover:underline' href={'/about/team'}>Our Team</Link>
                    </li>
                    <li>
                        <Link className='text-blue-600 hover:underline' href={'/code/repos'}>Code</Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Header