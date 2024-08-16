import { NavLink } from "react-router-dom";

//REM: [TODO, ASAP_MODE]
function view_home(): React.ReactElement
{
    return <>
    <div id="VIEW_HOME">
        <h1 className="text-lime-500 font-semibold text-[3rem]">Home page!</h1>
        <NavLink to="/department"
        className={`text-[1rem] underline text-blue-600 font-semibold`}>
            Department</NavLink>
    </div>
    </>;
}

const ViewHome = view_home;
export default ViewHome;