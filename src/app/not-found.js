import Link from 'next/link'
export default function Custom404() {


  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="text-3xl md:text-xl lg:text-3xl font-semibold text-blue-sky">
        Page not found!
      </div>

      <div className="mt-4">
        <img
          src="/notFound.gif"
          alt="Alt text for your image"
          className="w-300 h-300 sm:w-500 sm:h-500 md:w-700 md:h-1000 lg:w-1000 lg:h-1000"
        />
      </div>
      <div className="mt-4">
        <Link href="/">
          <button className="bg-blue-sky py-2 px-4  text-offwhite font-semibold hover:bg-gray-400">
            Go Back
          </button>
        </Link>

      </div>
    </div>
  )
}
