"use client"

import VideoPopup from './components/VideoPopup';
import BentoGrid from './components/BentoGrid';
import Hero from './components/Hero';
import { IoClose } from 'react-icons/io5';
import { HiAnnotation } from "react-icons/hi";
import { LuChartNoAxesCombined, LuPackage, LuCassetteTape, LuUsers, LuNewspaper, LuSettings } from "react-icons/lu";
import { TfiShoppingCartFull, TfiPanel,TfiPaintBucket, TfiPackage, TfiCreditCard } from "react-icons/tfi";

const set = [
  
  {
    id: 2,
    title: 'Products',
    text: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices tempor ut turpis lectus potenti massa laoreet. Nunc pharetra lacinia lectus felis vitae mattis in. Sem ultricies et at vulputate laoreet. Tellus leo  ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/OrderManagementSquare.png',
    icons:
    <TfiPackage color='#343747' size={32}/>,
  },
  
  {
    id: 4,
    title: 'Subscribers',
    text: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices tempor ut turpis lectus potenti massa laoreet. Nunc pharetra lacinia lectus felis vitae mattis in. Sem ultricies et at vulputate laoreet. Tellus leo  ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/CustomerManagementSquare.png',
    icons:
    <LuUsers strokeWidth={1.5} color='#343747' size={32}/>,
  },
  {
    id: 5,
    title: 'Orders Management',
    text: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices tempor ut turpis lectus potenti massa laoreet. Nunc pharetra lacinia lectus felis vitae mattis in. Sem ultricies et at vulputate laoreet. Tellus leo  ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/RFPLg.png',
    icons:
    <TfiShoppingCartFull color='#343747' size={32}/>,
  },
  {
    id: 6,
    title: 'Invoice',
    text: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices tempor ut turpis lectus potenti massa laoreet. Nunc pharetra lacinia lectus felis vitae mattis in. Sem ultricies et at vulputate laoreet. Tellus leo  ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/DirectBookingMd.png',
    icons:
    <LuNewspaper strokeWidth={1.4} color='#343747' size={32}/>,
  },
  {
    id: 8,
    title: 'Payments',
    text: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices tempor ut turpis lectus potenti massa laoreet. Nunc pharetra lacinia lectus felis vitae mattis in. Sem ultricies et at vulputate laoreet. Tellus leo  ',
   imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/HoldDateMd.png',
    icons:
    <TfiCreditCard color='#343747' size={32}/>,
  },
  {
    id: 9,
    title: 'Reports',
    text: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices tempor ut turpis lectus potenti massa laoreet. Nunc pharetra lacinia lectus felis vitae mattis in. Sem ultricies et at vulputate laoreet. Tellus leo  ',
   imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/AnalyticsSquare.png',
    icons:
    <LuChartNoAxesCombined strokeWidth={1.4} color='#343747' size={32}/>,
  } ,
  {
    id: 7,
    title: 'Configuration',
    text: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices tempor ut turpis lectus potenti massa laoreet. Nunc pharetra lacinia lectus felis vitae mattis in. Sem ultricies et at vulputate laoreet. Tellus leo  ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/ChannelManagerSquare.png',
    icons:
    <LuSettings strokeWidth={1.4} color='#343747' size={32}/>,
  },
  {
    id: 1,
    title: 'Branding',
    text: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices tempor ut turpis lectus potenti massa laoreet. Nunc pharetra lacinia lectus felis vitae mattis in. Sem ultricies et at vulputate laoreet. Tellus leo  ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/IntegrationEventTempleSquare.png',   
    
    icons:
      <TfiPaintBucket color='#343747' size={32} />,
  },
  {
    id: 3,
    title: 'Templates',
    text: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices tempor ut turpis lectus potenti massa laoreet. Nunc pharetra lacinia lectus felis vitae mattis in. Sem ultricies et at vulputate laoreet. Tellus leo  ',
    // imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/IndirectBookingsMd.png',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/InstantBookingSm.png',
    icons:
    <LuCassetteTape strokeWidth={1.2} color='#343747' size={32}/>,
  }
  
]
export default function Home() {
  return (
    <>
   
   <Hero />

   

    <div className="bg-gray-50 py-8">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div>Initial setup steps</div>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {set.map((card) => (
        <div
          key={card.id}
          className="relative space-y-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-md focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
        >
          <div className='flex justify-between'>
          <div>
            {card.icons}
          </div>
          <div> <VideoPopup /> </div>
          </div>
          <div>
              {/* <span aria-hidden="true" className="absolute inset-0" /> */}
              <div className="text-sm font-bold text-gray-900">{card.title}</div>
              <p className="text-sm text-gray-500">{card.text}</p>
          </div>

          <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-lg"
                    src={card.imgUrl}
                    alt=""
                  />
                </div>
         
        </div>
      ))}
    </div>
    </div>
    </div>

    <BentoGrid />
    </>
  );
}
