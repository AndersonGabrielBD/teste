import React from "react";

export const SidebarButton = ({ icon: Icon, label, active }) => {
  return (
    <button
      className={`flex items-center space-x-2 p-2 rounded-md w-[140px] transition-colors ${
      active ? "bg-black text-white w-[140px]"  : "bg-white text-black w-[140px]"
    }`}
    >
      <Icon className={`size-6 ${active ? "text-white" : "text-black"}`} />
      <span>{label}</span>
    </button>
  );
};
