"use client"

import { Location } from "@/types";
import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface LocationContextProps {
    error: string,
    loading: boolean,
    locations: Location[]
}

export const LocationContext = createContext<LocationContextProps | null>(null);

export const LocationProvider = ( { children } : { children: ReactNode } ) => {
    const BASE_URL = "https://rickandmortyapi.com/api/location";

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
        fetchLocations();
    }, [])

    async function fetchLocations() {
        setLoading(true);
        try {
            const response = await axios.get(BASE_URL);
            setLocations(response.data.results);
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
    }

    return <LocationContext.Provider value={
        {
            error,
            loading,
            locations
        }
    } >
        {children}
    </LocationContext.Provider>
}

export function useLocation() {
    const context = useContext(LocationContext);

    if (context === null) {
        throw new Error("LocationContext must be used within a <LocationProvider> block.");
    }
    return context;
}