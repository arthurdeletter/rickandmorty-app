"use client"

import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { Character } from "@/types";
import { useQuery } from "react-query";
import { CHARACTERS_QUERY_KEY } from "@/app/config/query-keys";

interface ContextProps {
    error: string,
    loading: boolean,
    characters: Character[],
    fetchCharacterDetails: ({id}: {id: number}) => Promise<Character>
}

export const CharacterContext = createContext<ContextProps | null>(null);

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
    const BASE_URL = "https://rickandmortyapi.com/api/character"
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const fetchCharacters = useCallback(async () => {
        console.log("Fetching characters")
        setLoading(true);
        try {
            const response = await axios.get(BASE_URL);
            setCharacters(response.data.results);
        } catch(err) {
            if (err instanceof Error) {
                setError(err.message);
                console.error(err.message)
            }
            else {
                setError("Something went wrong")
                console.error("Something went wrong")
            }
        } finally {
            setLoading(false);
        }
    }, [])

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters])

    const fetchCharacterDetails = useCallback(async ({ id }: { id: number }) => {
        console.log("Fetching character details")
        setLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/${id}`);

            if (response.data === "undefined") {
                throw new Error("No character was found with the ID provided")
            }

            return response.data
        } catch(err) {
            if (err instanceof Error) {
                setError(err.message);
                console.error(err.message)
            }
            else {
                setError("Something went wrong")
                console.error("Something went wrong")
            }
        } finally {
            setLoading(false);
        }
    }, [])

    return (
        <CharacterContext.Provider value={{characters, loading, error, fetchCharacterDetails}}>
            {children}
        </CharacterContext.Provider>
    )
}

export function useCharacter() {
    const context = useContext(CharacterContext);

    if (context === null) {
        throw new Error("Context must be used within a <Provider> block.");
    }
    return context;
}