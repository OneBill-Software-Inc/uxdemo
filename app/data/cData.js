import { LuChartNoAxesCombined, LuPackage, LuCassetteTape, LuUsers, LuNewspaper, LuSettings } from "react-icons/lu";
import { TfiShoppingCartFull, TfiPanel,TfiPaintBucket, TfiPackage, TfiCreditCard } from "react-icons/tfi";

const cards = [
  
  {
    id: 1,
    title: 'Branding',
    text: 'Dynamic Branding with User Theme Colors Ensure a seamless user experience by automatically adapting the branding elements—buttons, text, and backgrounds—to match the user’s theme color.',
    imgUrl: `${process.env.PUBLIC_URL}images/Banner.webp`,
    videoId: 'Xi5F9bZZdHPgnNavovN4Nm48CFQEddHasFBjSJQLu3E',
    
    icons:
      <TfiPaintBucket className="text-red-900" size={26} />,
  },
  {
    id: 7,
    title: 'Configuration',
    text: '--  ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/ChannelManagerSquare.png',
    videoId: 'BRsJZ4uBg54rrpJBlX00BjhgW7gjueYphljCnE7OZMrQ',
    icons:
    <LuSettings strokeWidth={1.4} color='#343747' size={26}/>,
  },
  
  {
    id: 3,
    title: 'Invoice Template',
    text: 'Configure the logo to display on the invoice, choose the branding colors to display on the invoice, and add a business remittance address to show on the invoice.',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/InstantBookingSm.png',
    videoId: 'asQITpOOSNOFuTjgfmwCOK1DZIOSafIuCaKZxRoWpZ8',
    icons:
    <LuCassetteTape strokeWidth={1.2} color='#343747' size={26}/>,
  },
  {
    id: 2,
    title: 'Products',
    text: 'Change description: Products are any product/service that you offer to your end customers. In this video, you can see how to set up a new product and define pricing for the same. ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/OrderManagementSquare.png',
    videoId: 'Lh1STpZ023QiDkTfSLgVVphXdzGdEIg00F22dNVRAse4c',
    icons:
    <TfiPackage color='#343747' size={26}/>,
  },
  {
    id: 4,
    title: 'Subscribers',
    text: 'Subscribers are your end customers. In this video, you can see how to set up a new subscriber and the information that you need to provide for the same. ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/CustomerManagementSquare.png',
    videoId: 'hudldbeVpDzNCIyMVkeJbSjYj3RvpRqDT7zUCYG5NtA',
    icons:
    <LuUsers strokeWidth={1.5} color='#343747' size={26}/>,
  },
  {
    id: 5,
    title: 'Order Management',
    text: 'Order is a transaction of purchase of one or more products/plans for your end subscriber. In this video, you can see how to add a new subscription for your subscriber.',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/RFPLg.png',
    videoId: 'F6PiyofGWjmFJtakx2JIidCacte5Dfhr00Z301AzPtd01s',
    icons:
    <TfiShoppingCartFull color='#343747' size={26}/>,
  },
  {
    id: 6,
    title: 'Invoice',
    text: '--- ',
    imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/DirectBookingMd.png',
    videoId: '3xNVTIBGjC3H02q30101f1WMGKlasayZJRcoQ00wj00M4BBA',
    icons:
    <LuNewspaper strokeWidth={1.4} color='#343747' size={26}/>,
  },
  {
    id: 8,
    title: 'Payments',
    text: '-- ',
   imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/HoldDateMd.png',
   videoId: '3xNVTIBGjC3H02q30101f1WMGKlasayZJRcoQ00wj00M4BBA',
   icons:
    <TfiCreditCard color='#343747' size={26}/>,
  },
  {
    id: 9,
    title: 'Reports',
    text: '-- ',
   imgUrl: 'https://1803444.fs1.hubspotusercontent-na1.net/hub/1803444/hubfs/2023-website-visuals/AnalyticsSquare.png',
   videoId: 'xas14CU01vwpBFGQ00NFrcbFdNLJmEVlZUtaJ02gJW73D00',
   icons:
    <LuChartNoAxesCombined strokeWidth={1.4} color='#343747' size={26}/>,
  } ,
  
]
  
  export default cards;