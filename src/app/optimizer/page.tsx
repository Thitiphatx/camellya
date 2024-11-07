import Activate from "./Activate";
import CharactersCard from "./CharactersCard";

export default function Page() {
  return (
    <div className="grid grid-cols-4 gap-2">
        <CharactersCard />
        <Activate />
    </div>
  )
}
