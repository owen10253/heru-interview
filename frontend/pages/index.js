import Head from 'next/head'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>

      <div className="flex mt-4 items-center justify-center">
        <div className="bg-white text-center overflow-hidden shadow rounded-lg divide-y-2 border-2 max-w-sm">
          <h1 className="text-2xl bg-gray-800 text-white px-4 py-5 sm:px-6">
            Leaderboards
          </h1>
          <button className="text-lg px-4 py-5 sm:p-6">
            <Link href="/v1/leaderboard">Leaderboard V1</Link>
          </button>
        </div>
      </div>
    </>
  )
}
