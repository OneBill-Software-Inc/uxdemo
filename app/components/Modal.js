"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { LuYoutube } from "react-icons/lu";

export default function ModalVideo({ videoId }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex absolute top-3 right-3 bg-white p-2 rounded-full  text-red-600 shadow-xs hover:bg-red-500 hover:translate-y-1 transition-all hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-7xl sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="aspect-w-16 aspect-h-16 h-[80vh] w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="Create Subscriber"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="max-w-sm flex gap-1 items-center bg-sky-100 border border-sky-400 text-sky-700 px-2 py-0  text-sm rounded-md overflow-hidden cursor-pointer"
      >
        <LuYoutube size={18} />
        Video
      </button>
    </>
  );
}
