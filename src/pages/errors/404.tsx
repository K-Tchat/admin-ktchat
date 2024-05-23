import { Button } from "@/components/ui/button";
import { paths } from "@/router";
import { OctagonAlert, Undo2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center  max-w-sm mx-auto text-center gap-4 py-32">
      <p className="p-3 text-sm font-medium bg-card rounded-full">
        <OctagonAlert size={64} className="text-primary" />
      </p>
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
        Page non trouvée
      </h1>
      <p className="text-gray-500 dark:text-gray-400">
        La page que vous recherchez n'existe pas. Voici quelques informations
        utiles liens:
      </p>

      <div className="flex items-center w-full gap-x-3 shrink-0 sm:w-auto">
        <Button
          className="gap-2"
          onClick={() => navigate(-1)}
        >
          Retourner <Undo2 size={16} />
        </Button>

        <Button>
          <Link to={paths.HOME}>Ramène-moi à la maison</Link>
        </Button>
      </div>
    </section>
  );
};
