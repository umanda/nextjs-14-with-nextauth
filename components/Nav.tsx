import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'
import { options } from '../api/auth/[...nextauth]/options';

const Nav = async () => {


    const session = await getServerSession(options);

    return (
        <header className='bg-gray-600 text-gray-100'>
            <nav className='flex items-center justify-between w-full px-10 py-4'>
                <div>Drawify AI</div>
                <div className='flex gap-10'>
                    <Link href="/">Home</Link>
                    <Link href="/createuser">Create User</Link>
                    <Link href="/clientmember">Client Member</Link>
                    <Link href="/member">Memebr</Link>
                    <Link href="/public">Public</Link>
                    {session ? 
                    <Link href="/api/auth/signout?callbackUrl=/">Logout</Link> : 
                    <Link href="/api/auth/signin">Login</Link>}
                </div>
            </nav>
        </header>
    )
}

export default Nav