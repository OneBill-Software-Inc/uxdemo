import { LuChartNoAxesCombined, LuPackage, LuCassetteTape, LuUsers, LuNewspaper, LuSettings } from "react-icons/lu";
import { TfiShoppingCartFull, TfiPanel,TfiPaintBucket, TfiPackage, TfiCreditCard } from "react-icons/tfi";

const cards = [
  

  {
    id: 1,
    title: 'Configuration',
    text: '--  ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/ChannelManagerSquare.png',
    videoId: 'bimwyj35hhvg',
    icons:
    <LuSettings strokeWidth={1.4} color='#343747' size={26}/>,
  },
  {
    id: 2,
    title: 'Product / Pricing',
    text: 'Change description: Products are any product/service that you offer to your end customers. In this video, you can see how to set up a new product and define pricing for the same. ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/OrderManagementSquare.png',
    videoId: '1dhwjvjfkfsg',
    icons:
    <TfiPackage color='#343747' size={26}/>,
  },
   {
    id: 3,
    title: 'Subscribers',
    text: 'Subscribers are your end customers. In this video, you can see how to set up a new subscriber and the information that you need to provide for the same. ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/CustomerManagementSquare.png',
    videoId: 'qwruvavq1won',
    icons:
    <LuUsers strokeWidth={1.5} color='#343747' size={26}/>,
  },

  {
    id: 4,
    title: 'Order Management',
    text: 'Order is a transaction of purchase of one or more products/plans for your end subscriber. In this video, you can see how to add a new subscription for your subscriber.',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/RFPLg.png',
    videoId: 'vdub72u0nh9t',
    icons:
    <TfiShoppingCartFull color='#343747' size={26}/>,
  },
  
  {
    id: 5,
    title: 'Invoice / AR',
    text: 'Configure the logo to display on the invoice, choose the branding colors to display on the invoice, and add a business remittance address to show on the invoice.',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/InstantBookingSm.png',
    videoId: 'zyjm5gr6wgpp',
    icons:
    <LuCassetteTape strokeWidth={1.2} color='#343747' size={26}/>,
  },
 
  {
    id: 6,
    title: 'Reports / Dashboard',
    text: '-- ',
   imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/AnalyticsSquare.png',
   videoId: 'wsm5nwcdhuwi',
   icons:
    <LuChartNoAxesCombined strokeWidth={1.4} color='#343747' size={26}/>,
  } ,
  
]
  
  export default cards;
