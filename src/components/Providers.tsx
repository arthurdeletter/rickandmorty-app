import { CharacterProvider } from "@/context/CharacterContext";
import { LocationProvider } from "@/context/LocationContext";
import QueryProvider from "@/components/QueryProvider";

const Providers = ({
    children
} : {
    children: React.ReactNode
}) => {
  return (
    <QueryProvider>
      <LocationProvider>
          <CharacterProvider>
              {children}
          </CharacterProvider>
      </LocationProvider>
    </QueryProvider>
  )
}

export default Providers