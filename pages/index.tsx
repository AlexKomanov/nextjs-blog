import { Inter } from '@next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
 
      <div className='flex items-center flex-col justify-center'>
          <h2 className='text-2xl font-extrabold mt-3'>It is a Home page</h2>
          <Image src='/images/macbook.jpg' alt='home' width={900} height={600} style={{marginTop: '15px'}}/>
      </div>
    
  )
}
