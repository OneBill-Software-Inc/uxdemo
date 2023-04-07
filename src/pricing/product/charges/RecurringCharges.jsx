import React from 'react'
import Input from '@/components/Input'

import { OBSearchIcon, OBServiceDeskIcon } from '@/components/obIcons'

import SelectBox from '@/components/SelectBox'
import SelectMBox from '@/components/SelectMBox'

export default function RecturringCharges() {
  return (
    <div className="h-[1296px] bg-gyar-300 lg:max-w-5xl max-w-3xl mx-auto">
      <div className="space-y-8">
        <div className="mb-8 border-b border-gray-300 pb-4">
          <h5> Recurring Charge Info </h5>
          <p className="text-sm text-gray-600">
            Refers to events or expenses that are one-time or irregular, rather
            than recurring or ongoing.
          </p>
         
        </div>

        <div className="grid grid-cols-3">
          <div className="col-span-2 grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <Input Name="Product Name *" />
            </div>
            <Input Name="Code" />
            <Input Name="Product Availability *" />
            <div className="col-span-2 mt-2">
              <fieldset className="border rounded-xl border-gray-300">
                <legend className="text-primary ml-4 px-3">
                  Invoice Description
                </legend>
                <div className="p-8 text-gray-500">
                  Enter your charge invoice information{' '}
                </div>
              </fieldset>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="w-40 h-40 rounded-xl border"></div>
          </div>
        </div>

        <fieldset className="border rounded-xl border-gray-300">
          <legend className="text-primary ml-4 px-3">Advanced Settings</legend>
          <div className="p-8">
            <div className="grid grid-cols-3 gap-4">
              <SelectMBox />
              <SelectBox />
              <Input Name="Name" />
              <Input Name="Name" />
              <Input Name="Name" />
              <div className="col-span-2">
                <Input Name="Name" />
              </div>
              <Input Name="Name" />
              <div className="flex gap-4">
                <Input Name="Name" />
                <Input Name="Name" />
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  )
}
