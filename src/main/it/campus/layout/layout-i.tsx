import { Outlet } from "react-router-dom";
// import Header from "@/main/it/campus/component/Header.tsx";
// import Footer from "@/main/it/campus/component/Footer.tsx";
import Header from "@main/it/campus/component/Header.tsx";
import Footer from "@main/it/campus/component/Footer.tsx";
import { $it$campus$model$heading as $heading } from "@main/it/campus/model/heading/package-info.mts";


const LayoutI = layout_i;
export default LayoutI;

//REM: [TODO, ASAP_MODE]
function layout_i(
    { header, className } : $heading.FCHeader
): React.ReactElement
{
    return (<>
    <div className={`${className}`}>
        <Header className={`flex flex-col 
        place-content-evenly
        justify-items-center
        pl-2 pr-2 text-purple-600
        text-[1.5rem] font-semibold`} header={header}/>

        <div className="flex flex-row
        place-content-around
        justify-items-center
        items-center
        place-items-center
        pl-4 pr-0">
            <Outlet/>
        </div>

        <Footer className={`flex flex-col 
        place-content-evenly
        justify-items-center
        p-2 text-purple-600
        text-[1.5rem] font-semibold`}  header={header}/>
    </div>
    </>);
}