export default function Hero() {
    return (
        <div className="relative isolate overflow-hidden bg-white">
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
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:pb-20">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
            <img
              alt="Your Company"
              src="https://www.onebillsoftware.com/wp-content/uploads/2021/12/OneBill-Logo.png.webp"
              className="h-11"
            />
            {/* <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="https://www.help.onebillsoftware.com/docs/bss/release-7-x/7-20/" target="_blank" className="inline-flex space-x-6">
                <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm/6 font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                  What's new
                </span>
                <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600">
                  <span>Just shipped v7.20</span>
                </span>
              </a>
            </div> */}
            <h1 className="mt-10 text-pretty text-xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Kickstart Your Journey with OneBill
            </h1>
            <p className="mt-3 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
            Simplify billing, automate subscriptions, and accelerate revenue growth with OneBill. From usage-based pricing to seamless integrations, our all-in-one platform empowers businesses to scale effortlessly.
            </p>
            <div className="pt-16 hidden">
            <img
                  alt="App screenshot"
                  src="./obkh.png"
                  width={2432}
                  height={1442}
                  
                />
            </div>
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
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              {/* <div className="-m-2 relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="grid-moving-line h-[95%] absolute w-px overflow-hidden" ></div>
                <img
                  alt="App screenshot"
                  src="./ProductListingPage_1.png"
                  width={2432}
                  height={442}
                  className="w-5xl rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
