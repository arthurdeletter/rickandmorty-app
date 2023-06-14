"use client"

import { Location } from "@/types";
import axios from "axios";
import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";

interface LocationContextProps {
    error: string,
    loading: boolean,
    locations: Location[],
    fetchLocationById: ({id}: {id: number}) => Promise<Location>
}

export const LocationContext = createContext<LocationContextProps | null>(null);

export const LocationProvider = ( { children } : { children: ReactNode } ) => {
    const BASE_URL = "https://rickandmortyapi.com/api/location";

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [locations, setLocations] = useState<Location[]>([]);

    const fetchLocations = useCallback(async () => {
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
    }, [])

    useEffect(() => {
        fetchLocations();
    }, [fetchLocations])

    const fetchLocationById = useCallback(async ({ id }:{ id:number }) => {
        console.log("Fetching location details")
        setLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/${id}`);

            if (response.data === "undefined") {
                throw new Error("No location was found with the ID provided")
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

    return <LocationContext.Provider value={
        {
            error,
            loading,
            locations,
            fetchLocationById
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