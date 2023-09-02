import FolderList from '@/components/FolderList'
import Sidebar from '@/components/Sidebar'
import SignInButton from '@/components/SignInButton'
import { collection, getDocs, query, where } from 'firebase/firestore'
import React from 'react'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { app } from '@/components/FirebaseConfig'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Searchbar from '@/components/Searchbar'
import Storage from '@/components/Storage'
import { useContext } from 'react'
import { ParentFolderIdContext } from '@/context/ParentFolderIdContext'

const index = () => {
  const { data: session } = useSession()
  const [folderList, setFolderList] = useState([])
  const { parentFolderId, setParentFolderId } = useContext(ParentFolderIdContext)

  useEffect(() => {
    if (!session) {

    }
    else {
      getFolderList()
      console.log("user Session", session)
    }
    setParentFolderId(0)

  }, [session])

  const db = getFirestore(app)
  const getFolderList = async () => {
    setFolderList([])
    const q = query(collection(db, 'Folders'),
      where("createBy", "==", session.user.email))

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      setFolderList(folderList => ([...folderList, doc.data()]))

    })
  }

  return (
    <div className='bg-blue-50  w-full sm:flex'>
      <div className=''>
        <Sidebar className=' ' />
      </div>
      <SignInButton />

      <div className='sm:p-10 p-5 w-auto'>
        <Searchbar />
        <FolderList folderList={folderList} />
      </div>

      <div className=''>
        <Storage />
      </div>
    </div>
  )
}

export default index