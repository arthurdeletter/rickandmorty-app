"use client"

import { useLocation } from '@/context/LocationContext'
import React from 'react'
import { Location } from "@/components/locations";
import "./Locations.css"

export function Locations() {
  const { locations, loading, error } = useLocation();

  return (
    <section className='locations'>
      <div className="container">
        <h1>Locations</h1>
        <div className="locations__wrapper">
          {
            locations?.map(loc => (
              <Location key={loc.id} {...loc} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Locations;