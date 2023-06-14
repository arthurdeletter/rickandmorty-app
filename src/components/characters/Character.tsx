"use client"

import { Character as CharacterType } from '@/types';
import Link from 'next/link';
import { FC } from 'react';
import './Character.css';

interface CharacterProps extends CharacterType {}

export const Character: FC<CharacterProps> = ({id, name, species, image:imageUrl}) => {
  return (
    <Link href={`/characters/${id}`}>
        <div className='character__card'>
            <div className="card__image">
                <img src={imageUrl} alt={name} />
            </div>
            <div className="card__content">
                <h3>{name}</h3>
                <p>{species}</p>
            </div>
        </div>
    </Link>
  )
}