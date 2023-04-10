import React, { useState } from 'react'
import { Tab } from '@headlessui/react'

import Layout from '@/components/Layout'
import SelectBox from '@/components/SelectBox'
import LayoutContent from '@/components/Layout/LayoutContent'

// import RecturringCharges from './charges/RecurringCharges'

import './product.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Product() {
  let [categories] = useState({
    'Retail Price': [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    'Wholesale Price': [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Accounting: [
      {
        id: 1,
        title: <SelectBox />,
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })
  return (
    <>
      <Layout pageLeftNav={<LeftCardNav />}>
        <div className="w-full relative">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl relative z-0">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'rounded-t-md py-2 px-4 font-medium leading-5 text-center',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white text-primary z-10 border-x-2 border-transparent'
                        : 'text-gray-800 bg-gray-300 hover:text-gray-900 border-x-2 border-t-2 border-gray-400'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="-mt-1 z-10 relative">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel key={idx}>
                  <LayoutContent style={{ height: 'calc(100vh - 170px)' }}>
                    <ul>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                    <h3 className="text-sm font-medium leading-5">
                      {post.title}
                    </h3>

                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} comments</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} shares</li>
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
                  </LayoutContent>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
        {/* <LayoutContent style={{ height: 'calc(100vh - 170px)' }}>
            <RecturringCharges />
          </LayoutContent> */}
      </Layout>
    </>
  )
}

const LeftCardNav = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="p-4 flex-1 h-full">
        <div className="border-b border-dashed border-gray-300 pb-6 mb-4">
          <h5>Product Info </h5>
          <ul className="indent-3">
            <li>
              Business phone numbers in over 100 countries{' '}
              <p className="text-gray-600">
                11/17/2022 - <span className="text-green-600">Evergreen</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-primary/20 shadow-inner p-4 rounded-b-xl">
        <div className="flex gap-3">
          <div className="w-6">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth={1.2}
              stroke="currentColor"
              className="w-6 h-6 stroke-primary -mt-1"
            >
              <path
                d="M10 17.6586V20C10 21.1046 10.8954 22 12 22C13.1046 22 14 21.1046 14 20V17.6586M12 2V3M3 12H2M5.5 5.5L4.8999 4.8999M18.5 5.5L19.1002 4.8999M22 12H21M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex-1 text-sm  text-gray-700">
            <p className="font-medium mb-1">
              To create a product, follow 3 steps.
            </p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Create Product Info </li>
              <li>Create Price Plan Info</li>
              <li>Charge Details</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}
