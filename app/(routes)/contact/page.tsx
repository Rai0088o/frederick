import BannerContact from '@/components/pages/contactus/banner'
import History from '@/components/pages/contactus/history'
import Header from '@/components/sections/header'
import React from 'react'

export default function page() {
  return (
    <main>
       <div className="absolute top-0  z-50 w-full">
        <Header />
      </div>
        <BannerContact/>
        <History/>
    </main>
  )
}
