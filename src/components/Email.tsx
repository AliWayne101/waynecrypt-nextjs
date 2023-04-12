import Link from 'next/link';
import React from 'react'
import Details from '@/configs/Details';

function Email() {
  return (
    <div className='email'>
        <Link href={`mailto: ${Details.Email}`} className='email-link'>{Details.Email}</Link>
    </div>
  )
}

export default Email