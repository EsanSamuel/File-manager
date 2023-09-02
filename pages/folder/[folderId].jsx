import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Sidebar from '@/components/Sidebar'
import Searchbar from '@/components/Searchbar'
import { ParentFolderIdContext } from '@/context/ParentFolderIdContext'
import { app } from '@/components/FirebaseConfig'
import { useSession } from 'next-auth/react'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { collection, getDocs, query, where } from 'firebase/firestore'
import FolderList from '@/components/FolderList'

const folderDetails = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const { name, id } = router.query
    const { parentFolderId, setParentFolderId } = useContext(ParentFolderIdContext)
    const [folderList, setFolderList] = useState([])

    useEffect(() => {
        setParentFolderId(id)

        if (session) {
            getFolderList()
        }
    }, [id, session]);

    const db = getFirestore(app)
    const getFolderList = async () => {
        setFolderList([])
        const q = query(collection(db, 'Folders'),
            where("createBy", "==", session.user.email),
            where('parentFolderId', "==", id))



        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data())
            setFolderList(folderList => ([...folderList, doc.data()]))

        })
    }

    return (
        <div className='bg-blue-50 flex'>
            <div className=''>
                <Sidebar />
            </div>
            <div className='p-10 pb-5'>
                <Searchbar />
                <h1 className='font-bold text-[25px] pb-5'>{name}</h1>
                <FolderList folderList={folderList} />


            </div>
        </div>
    )
}

export default folderDetails