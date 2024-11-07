import React from 'react'

export default function Footer() {
  return (
    <div className='p-6 bg-slate-800 w-full justify-center'>
        <ul className='flex space-x-10 justify-center'>
            <li className='hover:underline font-semibold text-white'>X</li>
            <li className='hover:underline font-semibold text-white'>Telegram</li>
            <li className='hover:underline font-semibold text-white'>Instagram</li>
            <li className='hover:underline font-semibold text-white'>Facebook</li>
        </ul>
    </div>
  )
}
