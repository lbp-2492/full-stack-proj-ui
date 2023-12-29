import React from 'react'

const AddItem = () => {
  return (
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Add new item</h1>
            </div>
            <div className='item-center justify-center h-14 w-full my-4'>
                <label>Name</label>
                <label>Item Type</label>
                <label>Price</label>
            </div>
        </div>
    </div>
  )
}

export default AddItem