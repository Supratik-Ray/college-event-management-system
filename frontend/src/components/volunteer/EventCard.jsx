import { QrCodeIcon } from 'lucide-react'
import React from 'react'
import { FaCalendarWeek, FaMapPin } from 'react-icons/fa'

const EventCard = () => {
  return (
    <div className='bg-white rounded-2xl overflow-hidden w-80 shadow-lg border border-gray-100'>

      <div className='relative'>
        
        <span className='absolute top-3 left-3 bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold'>
          Event type
        </span>

        <span className='absolute top-3 right-3 bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold'>
          Active Now
        </span>

        <img
          className='w-full h-48 object-cover'
          src="https://images.unsplash.com/photo-1761839259494-71caddcdd6b3?w=600"
          alt="event"
        />

        <div className='absolute inset-0 bg-black/20'></div>
      </div>

      <div className='p-4'>

        <h3 className='font-bold text-lg'>Event Name</h3>

        <div className='mt-2 text-sm text-gray-600 space-y-1'>
          <p className='flex items-center gap-2'>
            <FaCalendarWeek className='text-blue-700' />
            09:00 AM - 11:00 AM
          </p>
          <p className='flex items-center gap-2'>
            <FaMapPin className='text-blue-700' />
            Engineering Block, Room 304
          </p>
        </div>

        <div className='mt-4'>
          <div className='flex justify-between text-xs text-gray-500 mb-1'>
            <span>Check-ins</span>
            <span>45 / 60</span>
          </div>

          <div className='w-full bg-gray-200 h-2 rounded-full'>
            <div className='bg-blue-600 h-2 rounded-full w-[75%]'></div>
          </div>
        </div>

        <button className='mt-4 w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition flex items-center justify-center gap-2'>
            <QrCodeIcon className='text-xs'/>
          Start Scanning
        </button>

      </div>
    </div>
  )
}

export default EventCard
