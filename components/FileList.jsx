import React from 'react'
import { AiOutlineFileText } from 'react-icons/ai'
import moment from 'moment/moment'

const FileList = ({ fileList }) => {
    return (
        <div className='mt-10 bg-white box p-5 rounded overflow-auto'>
            <div className='flex justify-between font-bold text-[18px] pb-5'>
                <div>Name</div>

                <div>Modified</div>
                <div>Size</div>

            </div>
            <hr />
            {fileList.map((list) => (
                <div key={list.id} className='flex justify-between space-y-3 pt-3'>
                    <div className='flex gap-3'><AiOutlineFileText className='text-[25px] text-green-500' />{list.name}</div>

                    <div>{moment(list.modifiedAt).format('MMMM DD, YYYY')}</div>
                    <div>{(list.size / 1024 ** 2).toFixed(2) + 'MB'}</div>

                </div>
            ))}

        </div>
    )
}

export default FileList