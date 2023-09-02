import React, { useState, useContext } from 'react'
import Image from 'next/image'
import { app } from './FirebaseConfig'
import { getAnalytics } from 'firebase/analytics'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import { ParentFolderIdContext } from '@/context/ParentFolderIdContext'

const CreateFolderModal = () => {
    const { data: session } = useSession()
    const [folderName, setFolderName] = useState()
    const db = getFirestore(app)
    const docId = Date.now().toString()
    const { parentFolderId, setParentFolderId } = useContext(ParentFolderIdContext)

    const onCreate = async () => {
        await setDoc(doc(db, "Folders", docId), {
            name: folderName,
            id: docId,
            createBy: session.user.email,
            parentFolderId: parentFolderId
        })

        toast.success('Folder Created!')
        setFolderName('')
    }
    return (
        <div className='flex flex-col justify-center items-center w-full'>

            <Image src='/folder.png' width={80} height={80} className='pb-5' />
            <input type='text' className='w-[300px] p-2 border-[1px] pb-2 ' placeholder='Folder name'
                onChange={(e) => setFolderName(e.target.value)} />
            <button className='bg-blue-500 rounded text-white p-2 mt-3 w-full' onClick={onCreate}>Create</button>
        </div>
    )
}

export default CreateFolderModal