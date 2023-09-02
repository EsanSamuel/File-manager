import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import { CiHome, CiLogout, CiSettings, CiFileOn } from 'react-icons/ci'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { LuFileSpreadsheet } from 'react-icons/lu'
import CreateFolderModal from './CreateFolderModal'
import { AiOutlineDelete } from 'react-icons/ai'

const Storage = () => {
    const { data: session } = useSession()
    return (
        <div className='bg-white sm:flex hidden rounded h-screen w-[300px]  right-0 box text-center cursor-pointer sm:flex hidden'>
            
        </div>
    )
}

export default Storage