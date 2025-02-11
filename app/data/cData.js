import { LuChartNoAxesCombined, LuPackage, LuCassetteTape, LuUsers, LuNewspaper, LuSettings } from "react-icons/lu";
import { TfiShoppingCartFull, TfiPanel,TfiPaintBucket, TfiPackage, TfiCreditCard } from "react-icons/tfi";

const cards = [
  
  {
    id: 1,
    title: 'Branding',
    text: 'Dynamic Branding with User Theme Colors Ensure a seamless user experience by automatically adapting the branding elements—buttons, text, and backgrounds—to match the user’s theme color.',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/IntegrationEventTempleSquare.png',
    videoId: 'aanY6Fbj6lo',
    
    icons:
      <TfiPaintBucket className="text-red-900" size={26} />,
  },
  {
    id: 7,
    title: 'Configuration',
    text: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices tempor ut turpis lectus potenti massa laoreet. Nunc pharetra lacinia lectus felis vitae mattis in. Sem ultricies et at vulputate laoreet. Tellus leo  ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/ChannelManagerSquare.png',
    videoId: 'isWtrV0ntHE',
    icons:
    <LuSettings strokeWidth={1.4} color='#343747' size={26}/>,
  },
  
  {
    id: 3,
    title: 'Templates',
    text: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices tempor ut turpis lectus potenti massa laoreet. Nunc pharetra lacinia lectus felis vitae mattis in. Sem ultricies et at vulputate laoreet. Tellus leo  ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/InstantBookingSm.png',
    videoId: 'aanY6Fbj6lo',
    icons:
    <LuCassetteTape strokeWidth={1.2} color='#343747' size={26}/>,
  },
  {
    id: 2,
    title: 'Products',
    text: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices tempor ut turpis lectus potenti massa laoreet. Nunc pharetra lacinia lectus felis vitae mattis in. Sem ultricies et at vulputate laoreet. Tellus leo  ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/OrderManagementSquare.png',
    videoId: 'aanY6Fbj6lo',
    icons:
    <TfiPackage color='#343747' size={26}/>,
  },
  {
    id: 4,
    title: 'Subscribers',
    text: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices tempor ut turpis lectus potenti massa laoreet. Nunc pharetra lacinia lectus felis vitae mattis in. Sem ultricies et at vulputate laoreet. Tellus leo  ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/CustomerManagementSquare.png',
    videoId: 'aanY6Fbj6lo',
    icons:
    <LuUsers strokeWidth={1.5} color='#343747' size={26}/>,
  },
  {
    id: 5,
    title: 'Orders Management',
    text: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices tempor ut turpis lectus potenti massa laoreet. Nunc pharetra lacinia lectus felis vitae mattis in. Sem ultricies et at vulputate laoreet. Tellus leo  ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/RFPLg.png',
    videoId: 'aanY6Fbj6lo',
    icons:
    <TfiShoppingCartFull color='#343747' size={26}/>,
  },
  {
    id: 6,
    title: 'Invoice',
    text: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices tempor ut turpis lectus potenti massa laoreet. Nunc pharetra lacinia lectus felis vitae mattis in. Sem ultricies et at vulputate laoreet. Tellus leo  ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/DirectBookingMd.png',
    videoId: 'aanY6Fbj6lo',
    icons:
    <LuNewspaper strokeWidth={1.4} color='#343747' size={26}/>,
  },
  {
    id: 8,
    title: 'Payments',
    text: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices tempor ut turpis lectus potenti massa laoreet. Nunc pharetra lacinia lectus felis vitae mattis in. Sem ultricies et at vulputate laoreet. Tellus leo  ',
   imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/HoldDateMd.png',
   videoId: 'aanY6Fbj6lo',
   icons:
    <TfiCreditCard color='#343747' size={26}/>,
  },
  {
    id: 9,
    title: 'Reports',
    text: 'Lorem ipsum dolor sit amet consectetur. Vitae ultrices tempor ut turpis lectus potenti massa laoreet. Nunc pharetra lacinia lectus felis vitae mattis in. Sem ultricies et at vulputate laoreet. Tellus leo  ',
   imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/AnalyticsSquare.png',
   videoId: 'aanY6Fbj6lo',
   icons:
    <LuChartNoAxesCombined strokeWidth={1.4} color='#343747' size={26}/>,
  } ,
  
]
  
  export default cards;