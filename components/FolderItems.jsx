import React from 'react'
import Image from 'next/image'

const FolderItems = ({ name }) => {
    return (
        <div className='pb-4 p-8 text-center border rounded hover:bg-blue-50 hover:shadow flex flex-col justify-center items-center'>
            <Image src='/folder.png' width={70} height={70} />
            <h1>{name}</h1>
        </div>
    )
}

export default FolderItems