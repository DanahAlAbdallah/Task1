import Image from 'next/image'
import Navbar from './components/navbar.js'
import MyPage from './components/page1.js'
export default function Home() {
  return (
    <div>
      <main className="flex flex-col-reverse bg-gray-100 lg:flex-row min-h-screen items-center justify-between p-6 lg:p-24">
        <div className="lg:w-1/2 lg:pl-10 mr-5">
          <p className="text-gray-500">
            The term "euphoric" is an adjective used to describe a state of intense happiness, pleasure, or excitement. When someone is euphoric, they feel an overwhelming sense of joy and well-being. This feeling is often associated with positive experiences or situations, such as achieving a long-term goal, falling in love, or experiencing a moment of great happiness. Euphoria is characterized by a heightened sense of contentment and a temporary release from worries or troubles. It is a state of emotional bliss, and euphoric feelings are often described as "ecstatic," "elated," or "exhilarated."
          </p>
          {/* Add your other content here */}
        </div>
        <div className="lg:w-1/2">
          <img src="/img1.jpg" className="w-full" alt="Mountain" />
        </div>
      </main>
      <MyPage />
    </div>



  )
}
