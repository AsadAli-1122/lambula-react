import React from 'react'
import filters from '../../../images/noun_filters_1245150.svg'
import Category from './Category'
import Range from './Range.tsx'
import '../../../css/filter.css'


const Filter = () => {

    return (
        <>
            {/* <!-- Filter toggle Btn --> */}
            <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="" type="button">
                <img src={filters} alt="" className="px-4 py-2 max-h-full" />
            </button>

            {/* <!-- Main filter --> */}
            <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full md:p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-full">
                <div className="relative w-full max-w-4xl h-auto">
                    <div className="relative bg-white md:rounded-lg shadow dark:bg-gray-700 w-full">
                        <div className="flex items-start justify-center p-4 rounded-t border-b border-gray-200 ">
                            <h3 className="text-xl font-semibold text-b dark:text-white text-center">
                                Customize your trip
                            </h3>
                        </div>
                        <div className="p-6 space-y-2">

                            <Range name="Price" sign="$" minValue={400} maxValue={850} />

                            <Range name="Duration" sign="Days" minValue={4} maxValue={27} />

                            <Category />
                        </div>
                        <div className="flex items-center justify-center p-4 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="defaultModal" type="button" className="text-black bg-syellow hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 rounded-xl text-sm px-10 py-2.5 text-center dark:bg-syellow dark:hover:bg-syellow dark:focus:ring-yellow-bg-yellow-400 font-bold">Accept</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Filter
