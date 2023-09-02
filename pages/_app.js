import CreateFolderModal from '@/components/CreateFolderModal'
import { ParentFolderIdContext } from '@/context/ParentFolderIdContext'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import { useState } from 'react'



export default function App({ Component, pageProps: { session, ...pageProps }, }) {
  const [parentFolderId, setParentFolderId] = useState()
  return (
    <SessionProvider session={session}>
      <ParentFolderIdContext.Provider value={{ parentFolderId, setParentFolderId }}>
        <Toaster />
        <Component {...pageProps} />
      </ParentFolderIdContext.Provider>
    </SessionProvider>
  )
}
