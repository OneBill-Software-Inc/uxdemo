import cards from "../data/cData";
import ModalVideo from "./Modal";

export default function Cards() {
  return (
    <div className="bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="pb-6">
          <h1 className="text-pretty text-xl font-semibold text-gray-900">
            Get started in just a few simple steps and unlock the power of
            seamless billing and revenue management.
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="group relative overflow-hidden space-y-3 rounded-lg ring-8 ring-black/5 border border-gray-300 bg-white px-6 pt-8 shadow-sm hover:shadow-md transition-all focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2 hover:border-gray-400/60"
            >
              <div className="flex justify-between">
                <div className="text-md font-bold text-gray-900 gap-2 flex items-center bg-gradient-to-b from-slate-900 to-orange-700 bg-clip-text text-transparent">
                  {card.icons} {card.title}
                </div>
              </div>
              <div className=" relative z-10">
                <p className="text-sm text-gray-500">{card.text}</p>
              </div>

              <div className="h-40 relative z-0 ">
                <div className="absolute inset-0 flex justify-center items-center bg-gradient-to-b from-white to-transparent ">
                  <div className="relative">
                    <ModalVideo videoId={card.videoId} title={card.title} />
                  </div>
                </div>
                <img
                  className="w-full max-lg:max-w-lg -mt-4"
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
