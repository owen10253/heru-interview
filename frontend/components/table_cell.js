import { useState } from 'react';
import { useRouter } from 'next/router';

export default function SelectEvent({ rank, name, pic, score }) {

  return (
    <tr>
      <td className="border border-gray-400 p-2">{rank}</td>
      <td className="border border-gray-400 p-2">{name}</td>
      <td className="border border-gray-400 p-2">{pic}</td>
      <td className="border border-gray-400 p-2">{score}</td>
    </tr>
  )
}