import { LuChartNoAxesCombined, LuPackage, LuCassetteTape, LuUsers, LuNewspaper, LuSettings } from "react-icons/lu";
import { TfiShoppingCartFull, TfiPanel,TfiPaintBucket, TfiPackage, TfiCreditCard } from "react-icons/tfi";

const cards = [
  

  {
    id: 1,
    title: 'Configuration',
    text: 'Configure your platforms core settings. Learn how to personalize your branding, create custom invoice templates, and define crucial business defaults such as currency and date format.',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/ChannelManagerSquare.png',
    videoId: 'bimwyj35hhvg',
    icons:
    <LuSettings strokeWidth={1.4} color='#343747' size={26}/>,
  },
  {
    id: 2,
    title: 'Product / Pricing',
    text: 'Define your products and pricing. This section helps you configure the exact products and services you offer, set up their pricing, align taxation and accounting settings, and manage promotional offers.',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/OrderManagementSquare.png',
    videoId: '1dhwjvjfkfsg',
    icons:
    <TfiPackage color='#343747' size={26}/>,
  },
   {
    id: 3,
    title: 'Subscribers',
    text: 'Set up and manage your end customers, who are the core of your business. This video shows you how to easily view customer information, respond to queries, and make necessary changes to any subscriber account.',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/CustomerManagementSquare.png',
    videoId: 'qwruvavq1won',
    icons:
    <LuUsers strokeWidth={1.5} color='#343747' size={26}/>,
  },

  {
    id: 4,
    title: 'Purchase Subscriptions',
    text: 'Easily manage new subscriptions for your customers. This video walks you through the entire sales process, from navigating options to completing a successful sale for your end customer.',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/RFPLg.png',
    videoId: 'vdub72u0nh9t',
    icons:
    <TfiShoppingCartFull color='#343747' size={26}/>,
  },
  
  {
    id: 5,
    title: 'Invoice / AR',
    text: 'Effortlessly manage all your invoicing and payments. This video shows you how to create invoices (from new purchases or existing transactions), process customer payments, and handle any disputes by applying credit or debit adjustments.',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/InstantBookingSm.png',
    videoId: 'zyjm5gr6wgpp',
    icons:
    <LuCassetteTape strokeWidth={1.2} color='#343747' size={26}/>,
  },
 
  {
    id: 6,
    title: 'Reports / Dashboard',
    text: 'Keep a pulse on your business performance. This video shows you how to effectively use our standard dashboards and operational reports to monitor your key KPIs and metrics.',
   imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/AnalyticsSquare.png',
   videoId: 'wsm5nwcdhuwi',
   icons:
    <LuChartNoAxesCombined strokeWidth={1.4} color='#343747' size={26}/>,
  } ,
  
]
  
  export default cards;
