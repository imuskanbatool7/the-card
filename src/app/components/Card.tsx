
import Image from 'next/image'
import React from 'react'


export default function Card() {
  return (

    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-screen lg:flex  justify-around 
    sm:bg-purple-100 md:bg-blue-300 lg:bg-red-300'>
      <div className=' md:w-1/2 lg:w-auto   p-4 '>
        {/* card-1 */}
        <Image
          src="/image1.png"
          alt="pic1"
          width={300}
          height={300}
          
        />
      </div>


      {/* card-2 */}
      <div className=' md:w-1/2 lg:w-auto p-4 '>
        <Image src="/image2.png"
          alt="pic1"
          width={300}
          height={300}
        
        />
      </div>

      {/* card-3 */}
      <div className=' md:w-1/2 lg:w-auto p-4 '>
        <Image src="/image3.png"
          alt="pic3"
          width={360}
          height={300}
   
        />
      </div>
    </div>
  )
}

