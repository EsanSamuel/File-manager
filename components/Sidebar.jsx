import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import { CiHome, CiLogout, CiSettings, CiFileOn } from 'react-icons/ci'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { LuFileSpreadsheet } from 'react-icons/lu'
import CreateFolderModal from './CreateFolderModal'
import { AiOutlineDelete } from 'react-icons/ai'

const Sidebar = () => {
    const { data: session } = useSession()
    return (
        <div className='bg-white sm:flex hidden rounded h-screen w-[250px] box text-center cursor-pointer'>
            <ul className='space-y-10  top-0  bottom-0 left-0  p-10 rounded  text-center'>
                <div className='flex justify-center items-center'>
                    <Image src={session?.user?.image} width={100} height={100} alt='Image' className='rounded-full flex justify-center items-center' />
                </div>
                <div>
                <h1 className='font-bold text-[20px]'>{session?.user?.name}</h1>
                <p className='text-[12px] text-[#5f5f5f] pt-2'>{session?.user?.email}</p>
                </div>
                <div className='space-y-3'>
                    <li className='flex gap-3 bg-blue-400 py-2 px-7 text-white rounded' onClick={() => window.my_modal_3.showModal()}><IoIosAddCircleOutline className='text-[25px] text-white' />Add file</li>
                    <li className='flex gap-3 bg-purple-400 py-2 px-7 text-white rounded'><IoIosAddCircleOutline className='text-[25px] text-white' />Add file</li>
                </div>
                <li className='flex gap-2'><CiHome className='text-[25px]' />Home</li>
                <li className='flex gap-3'> <CiFileOn className='text-[25px]' />All files</li>
                <li className='flex gap-3' ><CiSettings className='text-[25px]' />Settings</li>
                <li className='flex gap-3' ><AiOutlineDelete className='text-[25px]' />Delete</li>
                <li className='flex gap-3' onClick={() => signOut()}><CiLogout className='text-[25px]' />Logout</li>
            </ul>

            {/* You can open the modal using ID.showModal() method */}
            <dialog id="my_modal_3" className="modal rounded-xl">
                <form method="dialog" className="modal-box rounded-[10%] p-10">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-5 top-2 outline-none">✕</button>
                    <CreateFolderModal />
                </form>
            </dialog>
        </div>
    )
}

export default Sidebar