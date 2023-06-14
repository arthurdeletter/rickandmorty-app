"use client"

import { FormElement, InputLabel, TextInput } from '@/components/ui/form-elements';
import { Character } from '@/types';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCharacter } from '../../../context/CharacterContext';
import './CharacterDetails.css';

export const CharacterDetails = ({ params } : { params: any }) => {
  const { characterId } = params;
  const {loading, error, fetchCharacterDetails} = useCharacter();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    async function fetchDetails({ id }: { id: number }) {
      const data = await fetchCharacterDetails({ id });

      setCharacter(data)
    }

    if (characterId) {
      const id = parseInt(characterId)

      fetchDetails({ id });
    }
  }, [characterId, fetchCharacterDetails])
    
  if (loading || !character) return <p>Loading...</p>
  return (
    <section>
      <div className="breadcrumbs">
          <div className="container">
            <div className="breadcrumb-items">
              <Link href="/characters">Characters</Link>
              <ChevronRightIcon className='breadcrumb-icon' />
              <strong>{character.name ?? ""}</strong>
            </div>
          </div>
        </div>
      <div className="character-details container">
        <aside className="info-box general-info">
          <div className="character-image">
            <Image priority fill src={character.image} alt={`Avatar of ${character.name}`} />
          </div>

          <div>
            <p>{character.species}</p>
            <h1>{character.name}</h1>
          </div>
        </aside>
        
        <div className="info-box about">
          <h2>About {character.name}</h2>

          {
            character.gender ? (
              <FormElement>
                <InputLabel htmlFor='gender'>Gender</InputLabel>
                <TextInput value={character.gender} name="gender" disabled />
              </FormElement>
            ) : null
          }
        </div>

        <div className="info-box episodes">
          <h2>Episodes</h2>
        </div>

      </div>
    </section>
  )
}

export default CharacterDetails;