import Head from 'next/head'
import Link from 'next/link'
import SelectEvent from '../../components/select_event'
import PlayerTable from '../../components/player_table'
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

  

  if (process.browser) {
    // Client-side-only code
  }

  useEffect(() => {
    setEvent(router.query.event_name);
    setView(router.query.view);
    setPage(router.query.page);
    setOrder(router.query.sortOrder);
  });

  const { data, error } = useSWR(`http://localhost:3080/leaderboard?event_name=${event_name}&view=${view}`, fetcher);

  console.log(data)

  const submit = (e, inputValue) => {
    e.preventDefault();
    router.push({
      pathname: "leaderboard",
      query: {
        event_name: inputValue,
        view: view,
        page: 1,
        sortOrder: 1
      },
    }, undefined, { shallow: true })
  }

  return (
    <div className="bg-green-100">
      <Head>
        <title>Leaderboard App</title>
      </Head>

      <div className="p-4 border-b border-gray-200">
        <Link href="/">Home</Link>
      </div>

      <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
        <div className="bg-blue-50 px-4 py-5 sm:px-6">
          <SelectEvent setEvent={setEvent} setView={setView} view={view} submit={submit} />
        </div>
        <div className="flex text-center justify-center bg-blue-100 px-4 py-5 sm:p-6">
          <PlayerTable data={data} page={page} sortOrder={sortOrder} event_name={event_name} />
        </div>
      </div>
    </div>
  )
}
