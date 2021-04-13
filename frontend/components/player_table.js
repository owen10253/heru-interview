import TableCell from './table_cell'

export default function PlayerTable({ data, page, event_name }) {
  // item per page
  const num = 100;
  // construct the Leaderboard table with data from GET request. 
  // --- xxx ---
  // Sorting logic still need to implemented. 
  return (
    <div className="">
      <div className="py-8 text-2xl">{event_name?.toUpperCase()} Leaderboard V1</div>
      <table className="p-4 border-collapse border border-gray-400">
        <tr className="bg-blue-200">
          <th className="border-gray-400 p-2">Rank</th>
          <th className="border-gray-400 p-2">Name</th>
          <th className="border-gray-400 p-2">Picture</th>
          <th className="border-gray-400 p-2">Score</th>
        </tr>

        {data?.map((player, i) => {
          if ( i < page * num && i >= (page - 1) * num ) {
            return <TableCell key={i} rank={player.rank} name={player.name} pic={player.pic} score={player.score} />
          }
        })}
      </table>
      <div>Page: {page}</div>
    </div>
  )
}