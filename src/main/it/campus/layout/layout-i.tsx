import { Outlet } from "react-router-dom";
// import Header from "@/main/it/campus/component/Header.tsx";
// import Footer from "@/main/it/campus/component/Footer.tsx";
import Header from "../component/Header.tsx";
import Footer from "../component/Footer.tsx";
import { it$campus$model$heading as heading } from "../model/heading/package-info.mts";

//REM: [TODO, ASAP_MODE]
function layout_i(
    { header } : heading.FCHeader
): React.ReactElement
{
    return (<>
    <div className="flex flex-col
    p-2">
        <Header header={header}/>
        <div className="flex flex-col
        pl-4 pr-0">
            <Outlet/>
        </div>
        <Footer header={header}/>
    </div>
    </>);
}

const LayoutI = layout_i;
export default LayoutI;