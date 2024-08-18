import { NavLink } from "react-router-dom";
import { $web_base_information_system as $main } from "@main/package-info.mts";

//REM: [TODO, ASAP_MODE]
function view_home(
    fcHeader: $main.$it$campus$model$heading.FCHeader
): React.ReactElement
{
    return <>
    <div id="VIEW_HOME" className={`${fcHeader.className}`}>
        <h1 className="text-lime-500 font-semibold text-[3rem]">Home page!</h1>
        <NavLink to="/department"
        className={`text-[1rem] underline text-blue-600 font-semibold`}>
            Department</NavLink>
    </div>
    </>;
}

const ViewHome = view_home;
export default ViewHome;