"use client"

import Loader from '@/components/Loader';
import { Location } from "@/components/locations";
import { useLocation } from '@/context/LocationContext';
import "./Locations.css";

export function Locations() {
  const { locations } = useLocation();

  if (locations.length === 0) return <Loader />
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