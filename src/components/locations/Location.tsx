import { Location as LocationType } from '@/types'
import Link from 'next/link'
import { FC } from 'react'
import "./Location.css"

interface LocationProps extends LocationType {
  
}

export const Location: FC<LocationProps> = ({ id, name, dimension, type }) => {
  return (
    <Link href={`/locations/${id}`}>
      <div className='location-card'>
        <span className="location--type">{type}</span>
        <p className="location--name">{name}</p>
        <span className="location--dimension">{dimension == "unknown" ? "Something unknown" : dimension}</span>
      </div>
    </Link>
  )
}