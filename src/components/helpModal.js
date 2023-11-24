import { Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'

export default function MyModal({ children,className }) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className={className}
                    
                >
                    {children}
                </button>

            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="xl:w-10/12 w-full min-h-[calc(100vh-5rem)] transform text-left align-middle shadow-xl transition-all">
                                    <div className='absolute -right-10 top-0 w-8 h-8 rounded-full flex items-center justify-center text-xl bg-red-500 text-white cursor-pointer'  onClick={closeModal}> X </div>
                                    <div className="flex w-full min-h-[calc(100vh-5rem)] rounded-xl bg-white overflow-hidden">

                                        <div className='w-64 md:w-1/6 p-6 min-w-[250px] bg-slate-100 border-r border-gray-400 md:block hidden'>Left</div>
                                        <div className='flex-1 bg-white flex flex-col h-[calc(100vh-82px)]'>
                                            
                                            <div className='help-content overflow-auto lg:p-6 p-3 flex-1'>
                                                <div className='page-title mb-3'>
                                                    <h3 className='text-gray-800 text-2xl'> Hi, OneBill</h3>
                                                    <p className='text-sm text-gray-600'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                                </div>

                                                <div> sdfas</div>

                                            </div>

                                            <div className='search p-2'>
                                                <div className="relative mt-1 rounded-md shadow-sm">
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                    </div>
                                                    <input
                                                        type="search"

                                                        className="block w-full rounded-md  border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                        placeholder="Search"
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
