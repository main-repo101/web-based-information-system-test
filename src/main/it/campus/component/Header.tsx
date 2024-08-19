

import React from "react";

import { $it$campus$model$heading as $heading } from "@main/it/campus/model/heading/package-info.mts";
import Logo from "@main/it/campus/component/Logo.tsx";
import { $it$campus$util as $util } from "@main/it/campus/util/package-info.mts";
import { $it$campus$component$navigation as $navigation } from "@main/it/campus/component/navigation/NavLink";

function Header(
    { header, className } : $heading.FCHeader
): React.ReactElement
{
    const DATE = new $util.Date();
    // DATE.setDateFormat("hh:mm:ss x")
    const [getDateFormatTimestamp, setDateFormat] = React.useState<string>( DATE.getFormatTimestamp());

    //REM: Invoke static Effect to update the date and time every second
    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setDateFormat(DATE.getFormatTimestamp());
        }, 1000);

        //REM: Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return <>
    <div id="HEADER" className={`${className}`}>
        <div className={`flex flex-row place-content-evenly`}>
            <Logo className={``} header={header}/>
            <h1>Header... {getDateFormatTimestamp}</h1>
            <$navigation.NavLink url={`/department/engineering`} header={header}>ENGINEERING</$navigation.NavLink>
        </div>
    </div>
    </>;
}

export default Header;