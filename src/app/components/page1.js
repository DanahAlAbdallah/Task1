import Link from 'next/link'
import React from 'react'

export default function MyPage() {
  return (
    <main className="flex flex-col bg-gray-100 lg:flex-row min-h-screen items-center justify-between p-6 lg:p-24">


      <div className="lg:w-1/2 mr-10">
        <img src="/heal.jpg" className="w-full mb-4" alt="Mountain" />
      </div>
      <div className="lg:w-1/2 lg:pl-10 mr-5">
        <p className="text-gray-500 mb-4 mr-10">
          Give you self permission to heal..
        </p>
        <Link href="/register">
          <button className="bg-blue-sky bg-opacity-80 hover:bg-blue-sky  text-white font-bold py-2 px-4">
            Register Now
          </button>
        </Link>
      </div>
    </main>

  )
}
