import Blog1 from '@/components/Blog1'
import Blog2 from '@/components/Blog2'
import React from 'react'
interface blog{
  title:string,
  image:string,
  author:string
  
  
}
const Feed = async() => {
 
 
  return (
    <div className='flex flex-col w-full mx-2 p-2'>
      <div className='flex flex-col m-1 p-2 '>
      <h1 className='font-bold text-5xl'>Blog Feed</h1>
      <p className='font-light text-sm'>Stay up to date with the latest marketing tips and news according to your interest.</p>
      </div>
      <div className='flex flex-col'>
        <h3 className='font-bold text-3xl'>Social Media Marketing
        <div className='bg-orange-600 h-1 w-80'></div></h3>

        <div className='grid grid-cols-2 m-3 p-4 gap-10 '>
          <Blog1 
           image="/blogimg.png"
           author='John Doe'
           title='How to Write a Press Release [Free Press Release
            Template'/>
          <Blog1
            image="/blogimg.png"
            author='John Doe'
            title='How to Write a Press Release [Free Press Release
              Template'/>
          <Blog1  
            image="/blogimg.png"
            author='John Doe'
            title='How to Write a Press Release [Free Press Release
              Template'/>
             <Blog1  
            image="/blogimg.png"
            author='John Doe'
            title='How to Write a Press Release [Free Press Release
              Template'/>

        </div>
      </div>
      <div>
        <h2 className='font-bold text-3xl'>Social Madia Marketing</h2>
        <div className='flex justify-evenly overflow-x-hidden'>
           <Blog2 image='/blog2.png' title='How to Use Instagram: A Beginner Guide'/>
            <Blog2 image='/blog2.png' title='How to Use Instagram: A Beginner Guide'/>
            <Blog2 image='/blog2.png' title='How to Use Instagram: A Beginner Guide'/>
            <Blog2 image='/blog2.png' title='How to Use Instagram: A Beginner Guide'/>
        </div>
      </div>
      <div>
        <h2 className='font-bold text-3xl'>Marketing</h2>
        <div className='flex justify-evenly overflow-x-hidden'>
           <Blog2 image='/blog2.png' title='How to Use Instagram: A Beginner Guide'/>
            <Blog2 image='/blog2.png' title='How to Use Instagram: A Beginner Guide'/>
            <Blog2 image='/blog2.png' title='How to Use Instagram: A Beginner Guide'/>
            <Blog2 image='/blog2.png' title='How to Use Instagram: A Beginner Guide'/>
        </div>
      </div>
    </div>
  )
}

export default Feed
