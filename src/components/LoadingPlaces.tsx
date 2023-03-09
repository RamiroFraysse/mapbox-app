import React from "react";

export const LoadingPlaces = () => {
  return (
    <div
      className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-center text-teal-900 px-4 py-3 shadow-md"
      role="alert"
    >
      <h6 className="font-bold">Buscando</h6>
      <p className="text-sm">Espere por favor</p>
    </div>
  );
};
