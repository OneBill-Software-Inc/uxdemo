import cards from "../data/cData";
import ModalVideo from "./Modal";

export default function Cards() {
  return (
    <div className="bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="pb-6">
          <h1 className="text-pretty text-base pb-6 text-gray-900">
            Watch these videos in sequence to get up and running.
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden space-y-3 rounded-lg ring-8 hover:ring-6 hover:ring-orange-500/10 hover:border-orange-300/50 ring-black/5 border border-gray-300 bg-white px-6 pt-8 shadow-xs hover:shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2"
            >
              <div className="flex justify-between">
                <div className="text-md font-bold gap-2 flex items-center bg-linear-to-b from-slate-900 to-orange-700 bg-clip-text text-transparent">
                  {card.icons} {card.title}
                </div>
                <div className=" absolute top-0 right-0 w-8 h-8 bg-gray-500 text-white text-xs font-bold rounded-bl-2xl group-hover:text-lgflex flex items-center justify-center group-hover:bg-orange-500 transition-all" style={{"box-shadow": "inset 3px -3px 6px #00000055"}}>{card.id} </div>
              </div>
              <div className=" relative z-10">
                <p className="text-sm text-gray-500">{card.text}</p>
              </div>

              <div className="h-40 relative z-0 ">
                <div className="absolute inset-0 group-hover:-top-1 transition-all duration-300 flex justify-center items-center bg-linear-to-b from-white to-transparent z-50 group-hover:scale-105">
                  <div className="relative">
                    <ModalVideo videoId={card.videoId} title={card.title} />
                  </div>
                </div>
                <img
                  className="w-full max-lg:max-w-lg -mt-4 group-hover:scale-105 transition-transform duration-500 ease-in-out"
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
