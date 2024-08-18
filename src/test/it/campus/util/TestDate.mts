
// import { $web_base_information_system } from '../../../../main/package-info.mts';

//REM: [TODO, HOW_TO_DO_IT] .|. How do to path/import aliasing? In React TS + Vite
import { $web_base_information_system } from "@main/package-info.mts";


//REM: [TODO, NOT_TESTED_YET]
const x = new $web_base_information_system.$it$campus$util.Date();
console.log( x.getFormatTimestamp() );