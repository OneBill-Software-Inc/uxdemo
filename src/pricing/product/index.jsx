import React from 'react'
import Layout from '@/components/Layout'
import CreateProduct from './CreateProduct'

import RecturringCharges from './charges/RecurringCharges'

import './product.css'
import LayoutContent from '@/components/Layout/LayoutContent'
export default function Product() {
  return (
    <Layout>
      <div className='left-nav-card'>fdsfas</div>
     <LayoutContent>
        <RecturringCharges />
     </LayoutContent>
    </Layout>
  )
}
