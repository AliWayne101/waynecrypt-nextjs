import Link from 'next/link';
import React from 'react'
import Details from '@/configs/Details';
import { motion } from 'framer-motion';

function Email() {
  return (
    <motion.div
      className='email'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.95
      }}
    >
        <Link href={`mailto: ${Details.Email}`} className='email-link'>{Details.Email}</Link>
    </motion.div>
  )
}

export default Email