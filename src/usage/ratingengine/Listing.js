import { PlusIcon } from "@heroicons/react/24/outline"
import Actions from "./Action"

const people = [
  { name: 'rabbitsfootvanilla', createdOn: '12/12/2022', modifiedOn: '12/12/2022', headerFiles: 'header_file_name.csv', size: '200kb', vender: 'Netsapiens' },
  { name: 'rabbitsfootvanilla', createdOn: '12/12/2022', modifiedOn: '12/12/2022', headerFiles: 'header_file_name.csv', size: '200kb', vender: 'Netsapiens' },
  { name: 'rabbitsfootvanilla', createdOn: '12/12/2022', modifiedOn: '12/12/2022', headerFiles: 'header_file_name.csv', size: '200kb', vender: 'Netsapiens' },
  { name: 'rabbitsfootvanilla', createdOn: '12/12/2022', modifiedOn: '12/12/2022', headerFiles: 'header_file_name.csv', size: '200kb', vender: 'Netsapiens' },
  { name: 'rabbitsfootvanilla', createdOn: '12/12/2022', modifiedOn: '12/12/2022', headerFiles: 'header_file_name.csv', size: '200kb', vender: 'Netsapiens' },
  { name: 'rabbitsfootvanilla', createdOn: '12/12/2022', modifiedOn: '12/12/2022', headerFiles: 'header_file_name.csv', size: '200kb', vender: 'Netsapiens' },
  { name: 'rabbitsfootvanilla', createdOn: '12/12/2022', modifiedOn: '12/12/2022', headerFiles: 'header_file_name.csv', size: '200kb', vender: 'Netsapiens' },
  { name: 'rabbitsfootvanilla', createdOn: '12/12/2022', modifiedOn: '12/12/2022', headerFiles: 'header_file_name.csv', size: '200kb', vender: 'Netsapiens' },
  { name: 'rabbitsfootvanilla', createdOn: '12/12/2022', modifiedOn: '12/12/2022', headerFiles: 'header_file_name.csv', size: '200kb', vender: 'Netsapiens' },
  { name: 'rabbitsfootvanilla', createdOn: '12/12/2022', modifiedOn: '12/12/2022', headerFiles: 'header_file_name.csv', size: '200kb', vender: 'Netsapiens' },
    // More people...
  ]
  
  export default function TableData() {
    return (
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold text-gray-800">Rating Engine list</h1>
            <p className="mt-2 text-xs text-gray-700">
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. 
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded border border-transparent bg-orange-600 pr-4 pl-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:w-auto"
            >
              <PlusIcon className="w-5 h-5 mr-3 text-white" />
              Rating Engine
            </button>
          </div>
        </div>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Rating Engine Name
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Created on
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Modified on
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Header files
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Vendor
                      </th>
                      <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person) => (
                      <tr key={person.email}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {person.name}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.createdOn}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.modifiedOn}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"><div>{person.headerFiles}</div> <div className="text-xs text-gray-400">{person.size}</div></td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.vender}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                         <Actions />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  