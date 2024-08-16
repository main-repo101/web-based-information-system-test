

import { it$campus$model$heading as $heading } from "../model/heading/package-info.mts";
import Logo from "./Logo.tsx";

function Footer(
    fcHeader : $heading.FCHeader
): React.ReactElement
{
    return <>
    <div id="FOOTER" className={`${fcHeader.className}`}>
        <div className={`flex flex-row place-content-evenly`}>
            <Logo className={``} header={fcHeader.header}/>
            <h1>Footer...</h1>
        </div>
    </div>
    </>;
}

export default Footer;