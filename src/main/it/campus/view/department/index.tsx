import React from 'react';
import { NavLink } from 'react-router-dom';

//REM: [TODO, ASAP_MODE]
const ViewDepartment: React.FC = () => {
  return (
    <>
      <div>
        <h1 className="text-lime-600 text-[3rem] font-semibold">Department!!!!</h1>
        <NavLink to="/department/engineering"
        className="text-blue-600 font-semibold 
        underline cursor-pointer">
          Engineering</NavLink>
      </div>
    </>
  );
};

export default ViewDepartment;
