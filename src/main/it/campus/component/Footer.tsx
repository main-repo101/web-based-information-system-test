

import { it$campus$model$heading as $heading } from "../model/heading/package-info.mts";


function Footer(
    { header } : $heading.FCHeader
): React.ReactElement
{
    return <>
        <h1 
        id="FOOTER" 
        className="text-orange-500
        text-[1.5rem] font-semibold">
            {header.subtitle} Footer...</h1>
    </>;
}

export default Footer;