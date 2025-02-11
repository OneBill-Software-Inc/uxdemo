  
import cards from "../data/cData";
import ModalVideo from './Modal';

export default function Cards() {
    return (
  <div className="bg-gray-50 py-8">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
     <div className='pb-6'>
     <h1 className="text-pretty text-xl font-semibold text-gray-900">
            Get started in just a few simple steps and unlock the power of seamless billing and revenue management.
            </h1>
     </div>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.id}
          className="relative space-y-3 rounded-lg ring-8 ring-black/5 border border-gray-300 bg-white px-6 pt-8 shadow-sm hover:shadow-md transition-all focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 hover:border-gray-400/60"
        >
          <div className='flex justify-between'>
          <div className="text-md font-bold text-gray-900 gap-2 flex items-center "> {card.icons} {card.title}</div>
          
            <ModalVideo videoId={card.videoId} />  
          
          </div>
          <div>
              {/* <span aria-hidden="true" className="absolute inset-0" /> */}
              {/* <div className="text-sm font-bold text-gray-900">{card.title}</div> */}
              <p className="text-sm text-gray-500">{card.text}</p>
          </div>

          <div className="h-32 overflow-hidden ">
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
  );
}