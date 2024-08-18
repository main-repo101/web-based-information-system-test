

import { $it$campus$model$heading as $heading } from "@main/it/campus/model/heading/package-info.mts";
import Logo from "@main/it/campus/component/Logo.tsx";
import { $it$campus$util as $util } from "@main/it/campus/util/package-info.mts";

function Footer(
    fcHeader : $heading.FCHeader
): React.ReactElement
{
    return <>
    <div id="FOOTER" className={`${fcHeader.className}`}>
        <div className={`flex flex-row place-content-evenly`}>
            <Logo className={``} header={fcHeader.header}/>
            <h1>Footer... {$util.Math.formatNumber(0.119)}</h1>
        </div>
    </div>
    </>;
}

export default Footer;