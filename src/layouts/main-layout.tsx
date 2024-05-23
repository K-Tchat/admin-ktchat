import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="h-screen overflow-hidden min-w-full flex flex-col justify-start space-y-10 bg-[#eef1fc]">
      <Outlet />
    </div>
  );
};
