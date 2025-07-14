import { LuChartNoAxesCombined, LuPackage, LuCassetteTape, LuUsers, LuNewspaper, LuSettings } from "react-icons/lu";
import { TfiShoppingCartFull, TfiPanel,TfiPaintBucket, TfiPackage, TfiCreditCard } from "react-icons/tfi";

const cards = [
  

  {
    id: 1,
    title: 'Configure Your Tenant',
    text: 'Configure your platforms core settings. Learn how to personalize your branding, create custom invoice templates, and define crucial business defaults such as currency and date format.',
    imgUrl: './images/config.png',
    videoId: 'jxvjivvqytjj',
    icons:
    <LuSettings strokeWidth={1.4} color='#343747' size={26}/>,
  },
  {
    id: 2,
    title: 'Add Products and Pricing',
    text: 'Define your products and pricing. This section helps you configure the exact products and services you offer, set up their pricing, align taxation and accounting settings, and manage promotional offers.',
    imgUrl: './images/Product.png',
    videoId: 'pscofr9lrgch',
    icons:
    <TfiPackage color='#343747' size={26}/>,
  },
   {
    id: 3,
    title: 'Manage Subscribers',
    text: 'Set up and manage your end customers, who are the core of your business. This video shows you how to easily view customer information, respond to queries, and make necessary changes to any subscriber account.',
    imgUrl: './images/oneview.png',
    videoId: 'iov7sxwwbdkw',
    icons:
    <LuUsers strokeWidth={1.5} color='#343747' size={26}/>,
  },

  {
    id: 4,
    title: 'Drive Subscriptions',
    text: 'Easily manage new subscriptions for your customers. This video walks you through the entire sales process, from navigating options to completing a successful sale for your end customer.',
    imgUrl: './images/order.png',
    videoId: 'vbp5peqcmhrd',
    icons:
    <TfiShoppingCartFull color='#343747' size={26}/>,
  },
  
  {
    id: 5,
    title: 'Generate Invoices',
    text: 'Effortlessly manage all your invoicing and payments. This video shows you how to create invoices (from new purchases or existing transactions), process customer payments, and handle any disputes by applying credit or debit adjustments.',
    imgUrl: './images/ar.png',
    videoId: 'zmx5fwzdq9pb',
    icons:
    <LuNewspaper strokeWidth={1.2} color='#343747' size={26}/>,
  },
 
  {
    id: 6,
    title: 'Monitor Business Performance',
    text: 'Keep a pulse on your business performance. This video shows you how to effectively use our standard dashboards and operational reports to monitor your key KPIs and metrics.',
   imgUrl: './images/reports.png',
   videoId: 'vhozxn2dkkiz',
   icons:
    <LuChartNoAxesCombined strokeWidth={1.4} color='#343747' size={26}/>,
  } ,
  
]
  
  export default cards;
