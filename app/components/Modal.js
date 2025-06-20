"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { LuYoutube } from "react-icons/lu";
import { FaCirclePlay } from "react-icons/fa6";
import MuxPlayer from "@mux/mux-player-react";

export default function ModalVideo({ videoId, title }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
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
              className="inline-flex absolute top-3 right-3 bg-white p-2 rounded-full  text-red-600 shadow-2xs hover:bg-red-500 hover:translate-y-1 transition-all hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
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
              className="relative transform overflow-hidden  rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:w-full sm:max-w-7xl sm:data-closed:translate-y-0 sm:data-closed:scale-95"
            >
              <div className="aspect-w-16 aspect-h-16 h-[80vh] w-full">
                <iframe
                  className="w-full h-full"
                  src={`https://onebillsoftware.storylane.io/demo/${videoId}`}
                  title="Create Subscriber"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  autoPlay
                ></iframe>

                {/* <MuxPlayer
                  className="w-full h-full"
                  playbackId={`${videoId}`}
                  loading="viewport"
                  metadataVideoTitle={`${title}`}
                  primary-color="#ffffff"
                  secondary-color="#000000"
                  accent-color="#fa50b5"
                  autoPlay="true"
                  thumbnailTime={5}
                  allowfullscreen="true"
                /> */}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-gray-600 ring-4 ring-black/30 rounded-full opacity-50 group-hover:opacity-100 transition-all hover:ring-red-600/30 hover:scale-105 hover:text-red-600"
      >
        <FaCirclePlay size={48} />
      </button>
    </div>
  );
}
