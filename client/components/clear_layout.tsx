import { Outlet } from "react-router";

/** Component com layout limpo */
export function ClearLayout() {
  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <div className="flex-auto overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
