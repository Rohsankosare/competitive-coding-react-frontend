import React from 'react'
import{GrBold,GrItalic}  from "react-icons/gr"
import {FaHeading,FaListOl,FaListUl,FaCode} from "react-icons/fa"
import {ImLink,ImImage} from "react-icons/im"
import {BsFillFileEarmarkCodeFill} from 'react-icons/bs'

const PostBodyNavBar = ({addMarkToEditor}) => {
  return (
   <div className='w-full h-full flex  py-2 px-2'>
     <button className='px-1 py-1 mx-2 border rounded-sm hover:bg-gray-200' onClick={()=>{addMarkToEditor(" # Enter Your Text Here ")}}><FaHeading/></button>
    <button className=' px-1 py-1 mx-2 border rounded-sm hover:bg-gray-200' onClick={()=>{addMarkToEditor(" **Enter Your Text Here** ")}}><GrBold/></button>
    <button className=' px-1 py-1 mx-2 border rounded-sm hover:bg-gray-200' onClick={()=>{addMarkToEditor(" *Enter Your Text Here* ")}}><GrItalic/></button>
    <button className=' px-1 py-1 mx-2 border rounded-sm hover:bg-gray-200' onClick={()=>{addMarkToEditor(" \n1.item 1 \n 2.Item 2 ")}}><FaListOl/></button>
    <button className=' px-1 py-1 mx-2 border rounded-sm hover:bg-gray-200' onClick={()=>{addMarkToEditor(" \n* item 1 \n * item 2 ")}}><FaListUl/></button>
    <button className=' px-1 py-1 mx-2 border rounded-sm hover:bg-gray-200' onClick={()=>{addMarkToEditor(" [title](https://example.com) ")}}><ImLink/></button>
    <button className=' px-1 py-1 mx-2 border rounded-sm hover:bg-gray-200' onClick={()=>{addMarkToEditor(" ![alt_text](https://example.com/image.jpg) ")}}><ImImage/></button>
    <button className=' px-1 py-1 mx-2 border rounded-sm hover:bg-gray-200' onClick={()=>{addMarkToEditor(" `Enter Your Code Here` ")}}><FaCode/></button>
    <button className=' px-1 py-1 mx-2 border rounded-sm hover:bg-gray-200 flex justify-center' onClick={()=>{addMarkToEditor(" \n```\nvoid func(){\n return\n }\n``` ")}}><BsFillFileEarmarkCodeFill/></button>
   </div>
  )
}

export default PostBodyNavBar