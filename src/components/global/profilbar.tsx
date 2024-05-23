import { Gem, ListStart, Rocket, Search, Trash } from "lucide-react";
import { Button } from "../ui/button";

export const ProfilBar: React.FC = () => {
  return (
    <div className="px-5 w-4/12 flex flex-col gap-3 sticky top-0">
      <div className="bg-white rounded-lg relative">
        <div className="flex flex-col items-center justify-center p-5">
          <img
            className="w-20"
            src="https://ktchat.vercel.app/assets/salons-mermaid-BhsL3luO.png"
            alt=""
          />
        </div>
        <div className=" absolute flex gap-2 items-center bg-[#eef1fc] p-1 rounded-lg top-3 right-3">
          <Gem size={16} color="blue" />
          <span className="text-sm font-bold">Gérant</span>
        </div>

        <div className="flex p-4 gap-5">
          <div className="flex flex-col items-center gap-2">
            <span className="flex items-center gap-2">
              <Search color="green" /> 20 <Trash color="red" />
            </span>
            <span className="text-xs text-center">
              Demande d'intervention modérateur
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="flex items-center gap-2">
              <Search color="green" /> 20 <Trash color="red" />
            </span>
            <span className="text-xs text-center">
              Demande de réactivation de compte
            </span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="flex items-center gap-2">
              <Search color="green" /> 20 <Trash color="red" />
            </span>
            <span className="text-xs text-center">Discussions non lu</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-5 flex flex-col">
        <div className="flex justify-between items-center">
          <span>Demande statut urgent en attente</span>
          <span className="p-2 bg-orange-200 text-orange-400 rounded-lg text-sm">
            En attente
          </span>
        </div>

        <div className="flex justify-around items-center p-5 ">
          <div className="flex flex-col items-center justify-center gap-5 w-1/3">
            <div className="flex items-center text-3xl gap-2">
              <span className="bg-[#d6defa] flex flex-col items-center justify-center w-16 h-16 rounded-full">
                <Rocket size={30} color="#315ae7" />
              </span>
              <span>1</span>
            </div>
            <span className="text-sm">Voir les demandes</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 w-1/3">
            <div className="flex items-center text-3xl gap-2">
              <span className="bg-[#f8d4d7] flex flex-col items-center justify-center w-16 h-16 rounded-full">
                <ListStart size={30} color="#ef747c" />
              </span>
              <span>1</span>
            </div>
            <span className="text-sm text-center">
              Inspection signalement system
            </span>
          </div>
        </div>

        <Button variant={"blue"}>Voir le rapport system</Button>
      </div>
    </div>
  );
};
