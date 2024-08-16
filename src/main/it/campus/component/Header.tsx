

import { it$campus$model$heading as $heading } from "../model/heading/package-info.mts";

function Header(
    { header } : $heading.FCHeader
): React.ReactElement
{
    return <>
        <h1 id="HEADER"
        className="text-orange-500
        text-[1.5rem] font-semibold">
            {header.title} Header...</h1>
    </>;
}

export default Header;