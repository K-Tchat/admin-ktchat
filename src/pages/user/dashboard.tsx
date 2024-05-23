import { LeftBar } from "@/components/global/lefbar";
import { ProfilBar } from "@/components/global/profilbar";
import { TopBar } from "@/components/global/topbar";

import {
  Select,
  SelectContent,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  CheckCheck,
  CircleOff,
  Eye,
  InfoIcon,
  Link,
  LogIn,
  Map,
  Send,
  SendIcon,
  Wifi,
} from "lucide-react";
import React from "react";
import { AxisOptions, Chart } from "react-charts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <TopBar />
      <div className="flex h-full justify-between overflow-scroll p-1">
        <LeftBar />
        <div className="px-5 w-1/2 flex flex-col gap-3">
          <Bonjour />
          <ColoredStats />
          <span>Suivi des modérateurs :</span>
          <ModoStats />
          <ChartComp />
          <span>Suivi des demandes spécifiques :</span>
          <RequestStats />
        </div>
        <ProfilBar />
      </div>
    </div>
  );
};

const Bonjour = () => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-3xl font-bold">Bonjourn, Username,</span>
      <div className="flex items-end gap-2">
        <Select>
          <SelectTrigger className="gap-2">
            <SelectValue placeholder="30 Dernier Jours" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="gap-2">
            <SelectValue placeholder="Mes campagnes" />
          </SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
      </div>
    </div>
  );
};

const ColoredStats = () => {
  return (
    <div className="flex items-center gap-10 p-3">
      <div className="bg-[#406aea] w-1/2 h-52 rounded-lg relative flex px-10">
        <div className="absolute left-10 top-5 bg-black/10 p-1 px-4 rounded-lg">
          <span className="text-white text-sm">Salons Actifs</span>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className=" absolute right-2 top-2">
              <InfoIcon color="white" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex items-start justify-between mt-16 w-full">
          <div className="flex flex-col gap-7 pt-5">
            <div className="flex items-center text-xl gap-5 text-white underline">
              <LogIn color="white" size={40} />
              <span>20</span>
            </div>
            <div className="absolute left-10 bottom-5 bg-black/10 p-1 px-4 rounded-lg">
              <span className="text-white text-sm">20 salons sur 70</span>
            </div>
          </div>

          <div className="flex justify-end w-20">
            <CircularProgressbar
              value={20}
              text={"20%"}
              styles={buildStyles({
                textSize: "20px",
                pathColor: `#3a5fd2`,
                textColor: "#fff",
                trailColor: "#fff",
              })}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#7068ce] w-1/2 h-52 rounded-lg relative flex px-10">
        <div className="absolute left-10 top-5 bg-black/10 p-1 px-4 rounded-lg">
          <span className="text-white text-sm">Nombre d’utilisateurs</span>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className=" absolute right-2 top-2">
              <InfoIcon color="white" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex items-start justify-between mt-16 w-full">
          <div className="flex flex-col gap-7 pt-5">
            <div className="flex items-center text-xl gap-5 text-white underline">
              <LogIn color="white" size={40} />
              <span>40</span>
            </div>
            <div className="absolute left-10 bottom-5 bg-black/10 p-1 px-4 rounded-lg">
              <span className="text-white text-sm whitespace-nowrap">
                Nombre d'utilisateurs en ligne
              </span>
            </div>
          </div>

          <div className="flex justify-end w-20">
            <CircularProgressbar
              value={25}
              text={"25%"}
              styles={buildStyles({
                textSize: "20px",
                pathColor: `#655db9`,
                textColor: "#fff",
                trailColor: "#fff",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ModoStats = () => {
  return (
    <div className="flex items-center gap-5 p-3">
      <div className="bg-white 1/2 h-40 rounded-lg flex items-center justify-between gap-10 px-10 py-5 relative">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center bg-[#d6defa] rounded-full p-3">
            <Wifi color="green" size={30} />
          </div>
          <span className=" underline">4</span>
          <span className="text-xs whitespace-nowrap">Modérateur en ligne</span>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className=" absolute right-2 top-2">
              <InfoIcon size={12} color="blue" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex justify-end w-25 flex flex-col items-center text-center text-xs gap-3">
          <CircularProgressbar
            value={25}
            text={"25%"}
            styles={buildStyles({
              textSize: "20px",
              pathColor: `#3a5fd2`,
              textColor: "#000",
              trailColor: "#f8f9fe",
            })}
            className="w-20"
          />

          <span>Taux d'acceptation</span>
        </div>
      </div>
      <div className="bg-white 1/2 h-40 rounded-lg flex items-center justify-between gap-10 px-10 py-5 relative">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center bg-[#caefe5] rounded-full p-3">
            <Send color="#00ba88" size={30} />
          </div>
          <span className=" underline">4</span>
          <span className="text-xs text-center">
            Nombre de demandes non traités
          </span>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className=" absolute right-2 top-2">
              <InfoIcon size={12} color="blue" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex justify-end w-25 flex flex-col items-center justify-start text-center text-xs gap-4">
          <CircularProgressbar
            value={25}
            text={"25%"}
            styles={buildStyles({
              textSize: "20px",
              pathColor: `#3a5fd2`,
              textColor: "#000",
              trailColor: "#f8f9fe",
            })}
            className="w-20"
          />

          <span>Taux de Réactivité</span>
        </div>
      </div>
    </div>
  );
};

type DailyStars = {
  date: Date;
  stars: number;
};

type Series = {
  label: string;
  data: DailyStars[];
};

const ChartComp = () => {
  const data: Series[] = [
    {
      label: "React Charts",
      data: [
        {
          date: new Date(),
          stars: 2020123,
        },
      ],
    },

    {
      label: "React Query",
      data: [
        {
          date: new Date(),
          stars: 10234230,
        },
      ],
    },
  ];
  const primaryAxis = React.useMemo(
    (): AxisOptions<DailyStars> => ({
      getValue: (datum) => datum.date,
    }),

    []
  );

  const secondaryAxes = React.useMemo(
    (): AxisOptions<DailyStars>[] => [
      {
        getValue: (datum) => datum.stars,
      },
    ],

    []
  );
  return (
    <div className="bg-white w-full rounded-lg flex flex-col items-start justify-between gap-10 p-10 relative">
      <span>Rapport trafic sur la plateforme :</span>
      <div className="flex justify-between gap-5">
        <div className="bg-[#eef1fc] w-1/5  rounded-lg p-2 flex flex-col items-center justify-center gap-2">
          <div className="flex items-center bg-[#caefe5] rounded-full p-3">
            <Link color="#00ba88" size={20} />
          </div>
          <span className=" underline">116</span>
          <span className="text-xs text-center">Total visiteurs </span>
        </div>
        <div className="bg-[#eef1fc] w-1/5 rounded-lg p-2 flex flex-col items-center justify-center gap-2">
          <div className="flex items-center bg-[#caefe5] rounded-full p-3">
            <Map color="#00ba88" size={20} />
          </div>
          <span className=" underline">50</span>
          <span className="text-xs text-center">Profiles invité </span>
        </div>{" "}
        <div className="bg-[#eef1fc] w-1/5 rounded-lg p-2 flex flex-col items-center justify-center gap-2">
          <div className="flex items-center bg-[#caefe5] rounded-full p-3">
            <SendIcon color="#00ba88" size={20} />
          </div>
          <span className=" underline">20</span>
          <span className="text-xs text-center">
            Profil abonné forfait trimestrie{" "}
          </span>
        </div>
        <div className="bg-[#eef1fc]  w-1/5 rounded-lg p-2 flex flex-col items-center justify-center gap-2">
          <div className="flex items-center bg-[#caefe5] rounded-full p-3">
            <Eye color="#00ba88" size={20} />
          </div>
          <span className=" underline">15</span>
          <span className="text-xs text-center">
            Profil abonné forfait annuel{" "}
          </span>
        </div>
        <div className=" bg-[#eef1fc] w-1/5  rounded-lg p-2 flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center bg-[#caefe5] rounded-full p-3">
            <Wifi color="#00ba88" size={20} />
          </div>
          <span className=" underline">25%</span>
          <span className="text-xs text-center">Taux de conversion </span>
        </div>
      </div>
      <div className="w-full h-96">
        <Chart
          options={{
            data,

            primaryAxis,

            secondaryAxes,
          }}
        />
      </div>
    </div>
  );
};

const RequestStats = () => {
  return (
    <div className="flex items-center gap-5 p-3">
      <div className="bg-white w-1/3 rounded-lg flex flex-col items-center justify-between gap-10 p-5 relative">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center bg-[#d6defa] rounded-full p-3">
            <CheckCheck color="green" size={30} />
          </div>
          <span className=" underline">4</span>
          <span className="text-xs text-center">
            Demandes compte modérateurs
          </span>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="absolute right-2 top-2">
              <InfoIcon size={12} color="blue" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex justify-end w-25 flex flex-col items-center text-center text-xs gap-3">
          <CircularProgressbar
            value={25}
            text={"25%"}
            styles={buildStyles({
              textSize: "20px",
              pathColor: `#3a5fd2`,
              textColor: "#000",
              trailColor: "#f8f9fe",
            })}
            className="w-20"
          />

          <span>Taux d'acceptation</span>
        </div>
      </div>
      <div className="bg-white 1/3 rounded-lg flex flex-col items-center justify-between gap-10 p-5 relative">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center bg-[#caefe5] rounded-full p-3">
            <LogIn color="#00ba88" size={30} />
          </div>
          <span className=" underline">4</span>
          <span className="text-xs text-center">
            Demande de recours après bannissement
          </span>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className=" absolute right-2 top-2">
              <InfoIcon size={12} color="blue" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex justify-end w-25 flex flex-col items-center justify-start text-center text-xs gap-4">
          <CircularProgressbar
            value={25}
            text={"25%"}
            styles={buildStyles({
              textSize: "20px",
              pathColor: `#3a5fd2`,
              textColor: "#000",
              trailColor: "#f8f9fe",
            })}
            className="w-20"
          />

          <span>Taux de Réactivité</span>
        </div>
      </div>

      <div className="bg-white 1/3 flex-col rounded-lg flex items-center justify-between gap-10 p-5 relative">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center bg-[#caefe5] rounded-full p-3">
            <CircleOff color="#00ba88" size={30} />
          </div>
          <span className=" underline">4</span>
          <span className="text-xs text-center">
            Nombre de demandes non traités
          </span>
        </div>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className=" absolute right-2 top-2">
              <InfoIcon size={12} color="blue" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex justify-end w-25 flex flex-col items-center justify-start text-center text-xs gap-4">
          <CircularProgressbar
            value={25}
            text={"25%"}
            styles={buildStyles({
              textSize: "20px",
              pathColor: `#3a5fd2`,
              textColor: "#000",
              trailColor: "#f8f9fe",
            })}
            className="w-20"
          />

          <span>Taux de Réactivité</span>
        </div>
      </div>
    </div>
  );
};
