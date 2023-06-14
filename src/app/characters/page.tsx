"use client"

import { FC } from 'react';
import { useCharacter } from '@/context/CharacterContext';
import './Characters.css';
import { Character } from '@/components/characters';

export const Characters:FC = () => {
  const { characters, loading, error } = useCharacter();

  if (loading) return <p>Loading...</p>
  return (
    <section className='characters'>
      <div className="container">
        <h1>Characters</h1>
        <div className="characters__wrapper">
          {
            characters?.map(ch => {
              return <Character key={ch.id} {...ch} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Characters;