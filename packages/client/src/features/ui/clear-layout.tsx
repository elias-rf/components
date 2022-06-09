import React from "react";
import { Outlet } from "react-router";

export default function ClearLayout() {
  return (
    <div className="flex flex-col h-screen lg:flex-row">
      <div className="flex-auto overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
