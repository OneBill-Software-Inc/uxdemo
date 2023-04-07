import React from 'react'
import Breadcrumbs from './components/Breadcrumbs'
import Header from './components/Header'

import MainNav from './components/Layout/LeftNav'
import Product from './pricing/product'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Header />
      <div className="flex-1 bg-white flex">
        <MainNav />
        <div className="flex-1 flex flex-col  border border-t border-l bg-gray-50 border-gray-300 rounded-tl-2xl relative">
          <Breadcrumbs />
          <Product />
        </div>
        <div className="2xl:w-60 hidden 2xl:block duration-150 bg-gray-100 border-t border-gray-300"></div>
      </div>
    </div>
  )
}
