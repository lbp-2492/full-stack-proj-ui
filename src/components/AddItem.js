import React from 'react'

const AddItem = () => {
  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Add new item</h1>
            </div>

            <div className='item-center justify-center h-14 w-full my-4'>
                <label className="block text-gray-600 text-sm font-normal">Name</label>
                <input type="text" className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className='item-center justify-center h-14 w-full my-4'>
                <label className="block text-gray-600 text-sm font-normal">Type</label>
                <input type="text" className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className='item-center justify-center h-14 w-full my-4'>
                <label className="block text-gray-600 text-sm font-normal">Price</label>
                <input type="text" className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
              <button class="bg-green-400 hover:bg-green-700 text-white font-normal py-2 px-4 rounded">
                Save
              </button>  
              <button class="bg-red-400 hover:bg-red-700 text-white font-normal py-2 px-4 rounded">
                Clear  
              </button>          
            </div>
        </div>
    </div>
  )
}

export default AddItem