import {
  Ban,
  CheckSquare,
  FileText,
  HelpCircle,
  Home,
  MessageCircle,
  MessageCircleWarning,
  Settings,
  UserPlus,
  UserRoundX,
  Users,
} from "lucide-react";

export const LeftBar: React.FC = () => {
  const Buttons = [
    { label: "Accueil", to: "/", icon: <Home /> },
    {
      label: "Gestion des Discussions privées",
      to: "/private-discussions",
      icon: <MessageCircle />,
    },
    {
      label: "Gestion des utilisateurs",
      to: "/user-management",
      icon: <Users />,
    },
    {
      label: "Gestion des Signalements utilisateurs",
      to: "/user-reports",
      icon: <UserRoundX />,
    },
    {
      label: "Gestion des Signalements systèmes",
      to: "/system-reports",
      icon: <MessageCircleWarning />,
    },
    {
      label: "Gestion des Bannissements",
      to: "/bans-management",
      icon: <Ban />,
    },
    {
      label: "Gestion des Demandes de recours",
      to: "/appeals-requests",
      icon: <FileText />,
    },
    {
      label: "Gestion et Créations de comptes",
      to: "/account-management",
      icon: <UserPlus />,
    },
    {
      label: "Vérification des votes",
      to: "/votes-verification",
      icon: <CheckSquare />,
    },
    { label: "Chat privé", to: "/private-chat", icon: <MessageCircle /> },
    {
      label: "Demande sur la foire à question",
      to: "/faq-requests",
      icon: <HelpCircle />,
    },
    { label: "Paramètre", to: "/settings", icon: <Settings /> },
  ];
  return (
    <div className="w-1/5 border-r-2 overflow-scroll sticky top-0">
      {Buttons.map((button, index) => (
        <div key={index} className="p-2">
          <button className="w-full flex p-3 gap-3 text-base rounded-lg items-center hover:text-blue-600 hover:bg-white">
            {button.icon}
            <span className="text-left">{button.label}</span>
          </button>
        </div>
      ))}
    </div>
  );
};
