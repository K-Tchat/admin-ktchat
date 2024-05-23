import { Bell } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export const TopBar: React.FC = () => {
  return (
    <div className="w-full flex justify-between items-center p-4 px-10">
      <h1 className="text-xl font-bold">K-Tchat Super Admin</h1>
      <div className="flex justify-between items-center gap-5">
        <Button variant={"blue"}>
          Gestion Global de la plateforme
        </Button>
        <Button variant={"outline"} className="w-10 h-10 p-[10px] shadow-sm">
          <Bell size={40} />
        </Button>
        <Link to={"/"}>
          <img
            className="w-8"
            src="https://ktchat.vercel.app/assets/salons-mermaid-BhsL3luO.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};
