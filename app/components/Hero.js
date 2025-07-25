export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-[#fff8f1] border-b border-orange-400">
        <svg
          aria-hidden="true"
          className="absolute inset-0 -left-2 -z-10 size-full stroke-gray-200 mask-[radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div className="mx-auto max-w-7xl grid grid-cols-2 container px-6 lg:px-8">
          <div className="mt-20 relative">
            <div className=" absolute w-96 h-96 rotate-45 bg-orange-300 bg-gradient-to-bl from-purple-600 to-orange-400 blur-3xl opacity-10 z-0 -top-20 left-20"> dfasdf</div>
            <h1 className=" hero-text mt-10 text-pretty lg:text-6xl text-4xl tracking-wide lg:leading-18 max-w-lg bg-gradient-to-r from-orange-500 via-orange-700 to-gray-800 inline-block text-transparent bg-clip-text">
            Jumpstart Your Journey with <span className=" hero-tag whitespace-nowrap"> OneBill RevOps</span>
            </h1>
            <p className="mt-10 text-pretty text-lg font-bold text-gray-800 max-w-2xl mb-10">
            Simplify billing, automate subscriptions, and accelerate revenue growth. From usage-based pricing to seamless integrations, our all-in-one platform empowers businesses to scale effortlessly.
            </p>
           
            <div className="absolute inset-x-0 top-3/4 -z-10 flex -translate-y-1/2 justify-center overflow-hidden mask-[radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg aria-hidden="true" className="h-160 w-7xl flex-none stroke-gray-200">
              <defs>
                <pattern
                  x="50%"
                  y="50%"
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
              </svg>
              <rect fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" width="100%" height="100%" strokeWidth={0} />
            </svg>
          </div>
          </div>
         
          <div className="-mr-64 flex items-end object-bottom pt-10">
           
           <img
                  alt="App screenshot"
                  src="https://getharvest.com/hubfs/template-assets/homepage/v3-1920_2560-hero-image_1.webp"
                  className="object-bottom"
                />

          </div>
        </div>
      </div>
    )
  }
