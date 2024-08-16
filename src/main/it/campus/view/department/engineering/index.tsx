import React from 'react';
import { NavLink } from "react-router-dom";

/**
 * 
 * @author [ Jayo, A. R. & Tayco, R ]
 */
const ViewEngineering: React.FC = () => {
  return (
    <>
      <div>
        <h1 className="text-orange-500 text-[3rem] font-semibold">Engineering!!!!</h1>
        <div className="flex flex-row gap-8">
          <NavLink to="/department/engineering/geodetic-engineer"
          className="text-blue-600 font-semibold 
          underline cursor-pointer">
            Geodetic engineering</NavLink>
          <NavLink to="/department/engineering/computer-engineer"
          className="text-blue-600 font-semibold 
          underline cursor-pointer">
            Computer engineering</NavLink>
        </div>
      </div>
    </>
  );
};

export default ViewEngineering;
