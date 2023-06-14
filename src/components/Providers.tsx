import { CharacterProvider } from "@/context/CharacterContext"
import { LocationProvider } from "@/context/LocationContext"

const Providers = ({
    children
} : {
    children: React.ReactNode
}) => {
  return (
    <LocationProvider>
        <CharacterProvider>
            {children}
        </CharacterProvider>
    </LocationProvider>
  )
}

export default Providers