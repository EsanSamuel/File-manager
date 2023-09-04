import { doc, getFirestore, setDoc } from 'firebase/firestore'
import React, { useContext } from 'react'
import { app } from './FirebaseConfig'
import { useSession } from 'next-auth/react'
import { ParentFolderIdContext } from '@/context/ParentFolderIdContext'
import { toast } from 'react-hot-toast'
import { getStorage, ref, uploadBytes } from 'firebase/storage'


const UploadFolderModal = () => {
    const { data: session } = useSession()
    const db = getFirestore(app)
    const storage = getStorage(app)
    const docId = Date.now().toString()
    const { parentFolderId, setParentFolderId } = useContext(ParentFolderIdContext)

    const onFileUpload = async (file) => {
        console.log("File", file)

        const storageRef = ref(storage, 'file/' + file.name);

        // 'file' comes from the Blob or File API
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
        await setDoc(doc(db, "files", docId), {
            name: file.name,
            type: file.name.split('.')[1],
            id: docId,
            size: file.size,
            modifiedAt: file.lastModified,
            createBy: session.user.email,
            parentFolderId: parentFolderId,
            imageUrl: '/folder.png',
        })

        toast.success('File uploaded!')
    }

    return (
        <div className='border rounded p-5 flex flex-col items-center justify-center '>
            <h1 className='text-center flex items-center justify-center text-[#5f5f5f] '>Click to upload or drag and drop File</h1>
            <input className='w-[200px] h-[200px] opacity-0' type='file' onChange={(e) => onFileUpload(e.target.files[0])} />
        </div>
    )
}

export default UploadFolderModal