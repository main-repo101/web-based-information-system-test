

import { it$campus$model$heading as $heading } from "../model/heading/package-info.mts";
import Logo from "./Logo.tsx";

function Header(
    { header, className } : $heading.FCHeader
): React.ReactElement
{
    return <>
    <div id="HEADER" className={`${className}`}>
        <div className={`flex flex-row place-content-evenly`}>
            <Logo className={``} header={header}/>
            <h1>Header...</h1>
        </div>
    </div>
    </>;
}

export default Header;