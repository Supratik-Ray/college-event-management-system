import React from 'react'
import { FaCalendarWeek, FaMapPin } from 'react-icons/fa'

const EventCard = () => {
  return (
    <div className=' rounded-2xl overflow-hidden w-80 shadow-md'>
      
      <div className='relative'>
        
        <div className='absolute top-3 left-0 w-full flex justify-between px-3'>
          <span className='bg-blue-50 rounded-2xl px-3 py-1 font-semibold text-blue-800 uppercase text-xs'>
            Event Type
          </span>
          <span className='bg-red-50 rounded-2xl px-3 py-1 font-semibold text-red-800 uppercase text-xs'>
            Open
          </span>
        </div>

        <img
          className='rounded-t-2xl w-full h-48 object-cover'
          src="https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?w=600"
          alt="event"
        />
      </div>

      <div className='p-3'>
        
        <h3 className='font-bold text-lg'>Event Name</h3>

        <div className='mt-2 text-sm text-gray-600 space-y-1'>
          <p className='flex items-center gap-2'>
            <FaCalendarWeek className='text-blue-800' />
            Event date, time
          </p>
          <p className='flex items-center gap-2'>
            <FaMapPin className='text-blue-800' />
            Location
          </p>
        </div>

        <div className='flex justify-end mt-4'>
          <button className='text-white bg-blue-800 px-4 py-2 rounded-lg hover:bg-blue-900 transition cursor-pointer'>
            Register
          </button>
        </div>

      </div>
    </div>
  )
}

export default EventCard
