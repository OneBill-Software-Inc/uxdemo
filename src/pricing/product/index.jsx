import React from 'react'
import Layout from '@/components/Layout'
import CreateProduct from './CreateProduct'

import RecturringCharges from './charges/RecurringCharges'

import './product.css'
import LayoutContent from '@/components/Layout/LayoutContent'
export default function Product() {
  return (
    <Layout>
      <div className='left-nav-card'>
      <div className='flex flex-col w-full h-full'>
                <div className='p-4 flex-1 h-full'> 
                <div className='border-b border-dashed border-gray-300 pb-6 mb-4'>
                <h5>Product Info </h5>
                  <ul className='indent-3'>
                    <li>Business phone numbers in over 100 countries <p className='text-gray-600'>11/17/2022  -  <span className='text-green-600'>Evergreen</span></p></li>
                    </ul>
                </div>
                </div>
                <div className='bg-primary/20 shadow-inner p-4 rounded-b-xl'> 
                  <div className='flex gap-3'>
                    <div className='w-6'>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth={1.2}  stroke="currentColor" className="w-6 h-6 stroke-primary -mt-1">
                      <path d="M10 17.6586V20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20V17.6586M12 2V3M3 12H2M5.5 5.5L4.8999 4.8999M18.5 5.5L19.1002 4.8999M22 12H21M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    </div>
                    <div className='flex-1 text-sm  text-gray-700'>
                      <p className='font-medium mb-1'>To create a product, follow 3 steps.</p>
                      <ol className='list-decimal list-inside space-y-1'>
                        <li>Create Product Info </li>
                        <li>Create Price Plan Info</li>
                        <li>Charge Details</li>
                      </ol>
                    </div>
                  </div>
                 </div>
            </div>
      </div>
     <LayoutContent>
        <RecturringCharges />
     </LayoutContent>
    </Layout>
  )
}
