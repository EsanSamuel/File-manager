import React from 'react'
import FolderItems from './FolderItems'
import { useState } from 'react'
import { useRouter } from 'next/router'

const FolderList = ({ folderList }) => {
    const [activeFolder, setActiveFolder] = useState()
    const router = useRouter()

    const onFolderClick = (index, list) => {
        setActiveFolder(index)
        router.push({
            pathname: '/folder/' + list.id,
            query: {
                name: list.name,
                id: list.id
            }
        })


    }

    return (
        <div className='bg-white box rounded p-5 w-auto'>
            <h1 className='text-[20px] font-bold'>Recents Folders</h1>
            {folderList?.length > 0 ? (
                <div className='grid sm:grid-cols-5 grid-cols-2 gap-2 pt-5' >
                    {folderList.map((list, index) => (
                        <div onClick={() => onFolderClick(index, list)}>
                            <FolderItems key={list.id} {...list} activeFolder={activeFolder == index} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className='pt-10 text-center'>
                    <h1>No folders found!</h1>
                </div>
            )}

        </div>
    )
}

export default FolderList