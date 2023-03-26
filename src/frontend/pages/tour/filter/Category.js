import React from 'react'

const Category = () => {
    return (
        <div>
            <div className="space-y-2">
                <div className="flex items-center text-xs text-black">
                    <p className="font-bold">Category</p>
                </div>
                <div className='flex flex-wrap pr-4'>
                    <input type="radio" name="Experience" id="rivers" className="experience hidden" defaultChecked='true' />
                    <label htmlFor="rivers" className="text-xs font-semibold cursor-pointer px-3 py-1 rounded-full text-gray-400">Rivers</label>
                    <input type="radio" name="Experience" id="lakes" className="experience hidden" />
                    <label htmlFor="lakes" className="text-xs font-semibold cursor-pointer px-3 py-1 rounded-full text-gray-400">Lakes</label>
                    <input type="radio" name="Experience" id="forests" className="experience hidden" />
                    <label htmlFor="forests" className="text-xs font-semibold cursor-pointer px-3 py-1 rounded-full text-gray-400">Forests</label>
                    <input type="radio" name="Experience" id="National Parks" className="experience hidden" />
                    <label htmlFor="National Parks" className="text-xs font-semibold cursor-pointer px-3 py-1 rounded-full text-gray-400">National Parks</label>
                    <input type="radio" name="Experience" id="Mountais" className="experience hidden" />
                    <label htmlFor="Mountais" className="text-xs font-semibold cursor-pointer px-3 py-1 rounded-full text-gray-400">Mountains</label>
                    <input type="radio" name="Experience" id="Others" className="experience hidden" />
                    <label htmlFor="Others" className="text-xs font-semibold cursor-pointer px-3 py-1 rounded-full text-gray-400">Others</label>
                    <input type="radio" name="Experience" id="Gorilas" className="experience hidden" />
                    <label htmlFor="Gorilas" className="text-xs font-semibold cursor-pointer px-3 py-1 rounded-full text-gray-400">Gorilas</label>
                </div>
            </div>
        </div>
    )
}

export default Category
