"use client"

import { FormElement, InputLabel, TextInput } from '@/components/ui/form-elements';
import { Character } from '@/types';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { useCharacter } from '../../../context/CharacterContext';
import './CharacterDetails.css';
import { afterLast } from '@/app/lib/utils';
import Loader from '@/components/Loader';

export const CharacterDetails = ({ params } : { params: any }) => {
  const { characterId } = params;
  const {loading, error, fetchCharacterDetails} = useCharacter();
  const [character, setCharacter] = useState<Character | null>(null);

  const fetchDetails = useCallback( async ({ id }: { id: number }) => {
    const data = await fetchCharacterDetails({ id });

    setCharacter(data)
  }, [fetchCharacterDetails])

  useEffect(() => {
    console.log("in useeffect")
    if (characterId) {
      const id = parseInt(characterId)

      fetchDetails({ id });
    }
  }, [characterId, fetchDetails])
    
  if (loading || !character) return <Loader />
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
          <div className="info-container">
            {
              character.gender ? (
                <FormElement>
                  <InputLabel htmlFor='gender'>Gender</InputLabel>
                  <TextInput value={character.gender} name="gender" disabled />
                </FormElement>
              ) : null
            }
            {
              character.status ? (
                <FormElement>
                  <InputLabel htmlFor='status'>Status</InputLabel>
                  <TextInput value={character.status} name="status" disabled />
                </FormElement>
              ) : null
            }
            {
              character.origin ? (
                <FormElement>
                  <InputLabel htmlFor='origin'>Origin</InputLabel>
                  <TextInput value={character.origin.name} name="origin" disabled />
                </FormElement>
              ) : null
            }
            {
              character.type ? (
                <FormElement>
                  <InputLabel htmlFor='type'>Type</InputLabel>
                  <TextInput value={character.type} name="type" disabled />
                </FormElement>
              ) : null
            }
            {
              character.location ? (
                <Link href={`/locations/${afterLast({value: character.location.url, delimiter: "/"})}`}>
                  <FormElement>
                    <InputLabel htmlFor='location'>Location</InputLabel>
                    <TextInput value={character.location.name} name="location" disabled />
                  </FormElement>
                </Link>
              ) : null
            }
          </div>
        </div>

        <div className="info-box episodes">
          <h2>Episodes</h2>
        </div>

      </div>
    </section>
  )
}

export default CharacterDetails;