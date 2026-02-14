import React from 'react'
import DesktopNav from './nav/DesktopNav'
import MobileNav from './nav/MobileNav'

type Props = {
  children: React.ReactNode;
}

const SidebarWrapper = ({ children }: Props) => {
  return (
    <div className='h-full w-full p-4 flex flex-col lg:flex-row gap-4'>
      <MobileNav />
      <DesktopNav />
      <main className="h-full w-full flex gap-4 overflow-hidden">
        {children}
      </main>
    </div>
  )
}

export default SidebarWrapper