import React from 'react'
import {
  OBSearchIcon,
  OBServiceDeskIcon,
  OBCustomerIcon,
  OBWalletIcon,
  OBUsersIcon,
  OBLinechartIcon,
  OBDataflowIcon,
  OBToolIcon,
  OBAnnouncementIcon,
  OBMonitorIcon,
  OBSettingsIcon,
  OBClapperboard,
} from '@/components/obIcons'
export default function MainNav() {
  return (
    <div className="w-16 flex flex-col bg-white">
      <div className="flex flex-col items-center w-full flex-1">
        <div className="pb-4 mb-6 border-b border-dashed border-primary">
          <div className="flex flex-col justify-center space-y-3">
            <OBSearchIcon />
          </div>
        </div>
        {/* <div className="w-11 h-11 flex justify-center items-center rounded-full">
          <OBMessagechartIcon/>
        </div> */}
        <div className="w-10 h-10 flex justify-center items-center rounded-full">
          <OBClapperboard />
        </div>
        <div className="w-10 h-10 flex justify-center items-center rounded-full">
          <OBCustomerIcon size={22} />
        </div>

        <div className="w-10 h-10 flex justify-center items-center rounded-full">
          <OBWalletIcon />
        </div>

        {/* <div className=" w-10 h-10 my-2 flex justify-center items-center rounded-full bg-primary/80 ring-[10px] ring-primary/20 scale-75"> */}
        <div className=" w-10 h-10 my-2 flex justify-center items-center rounded-full">
          <OBUsersIcon />
        </div>

        <div className="w-10 h-10 flex justify-center items-center rounded-full">
          <OBServiceDeskIcon />
        </div>
        <div className="w-10 h-10 flex justify-center items-center rounded-full">
          <OBLinechartIcon />
        </div>
        <div className="w-10 h-10 flex justify-center items-center rounded-full">
          <OBDataflowIcon />
        </div>
        <div className="w-10 h-10 flex justify-center items-center rounded-full">
          <OBToolIcon />
        </div>
      </div>
      <div className="flex flex-col pl-3 pb-4 w-full">
        <div className="w-10 h-10 flex justify-center items-center rounded-full">
          <OBAnnouncementIcon />
        </div>
        <div className="w-10 h-10 flex justify-center items-center rounded-full">
          <OBMonitorIcon />
        </div>
        <div className="w-10 h-10 flex justify-center items-center rounded-full">
          <OBSettingsIcon />
        </div>
      </div>
    </div>
  )
}
