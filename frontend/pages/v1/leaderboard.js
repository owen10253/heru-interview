import Head from 'next/head'
import Link from 'next/link'
import SelectEvent from '../../components/select_event'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

export default function Leaderboard() {
  const router = useRouter();

  const [event_name, setEvent] = useState();
  const [view, setView] = useState();
  const [page, setPage] = useState();
  const [sortOrder, setOrder] = useState();

  const {data, error} = useSWR('http://localhost:3080/leaderboard?event_name=league of legend&view=hundred', fetcher)
  console.log(data)

  if (process.browser) {
    // Client-side-only code
  }

  useEffect(() => {
    setEvent(router.query.event_name);
    setView(router.query.view);
    setPage(router.query.page);
    setOrder(router.query.sortOrder);
  });

  return (
    <>
      <Head>
        <title>Leaderboard App</title>
      </Head>

      <div className="p-4 border-b border-gray-200">
        <Link href="/">Home</Link>
      </div>

      <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
        <div className="px-4 py-5 sm:px-6">
          <SelectEvent setEvent={setEvent} setView={setView} view={view} />
        </div>
        <div className="px-4 py-5 sm:p-6">
          Result Goes Here
        </div>
      </div>

      <div>
        <div>Query</div>
        <div>{event_name}</div>
        <div>{view}</div>
        <div>{page}</div>
        <div>{sortOrder}</div>
      </div>
    </>
  )
}
