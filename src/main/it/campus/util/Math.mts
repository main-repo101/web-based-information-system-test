


export namespace $it$campus$util {
    export class Math {
        /**
         * 
         * @param value target
         * @param widthPrecission by default 2 precission
         * @returns string
         */
        static formatNumber(
            value: number | string , 
            widthPrecission: number = 2 
        ): string {

            const POSSIBLE_NUMERIC_VALUE = typeof value === 'string' ? globalThis.Number(value) : value;

            //REM: Ensure the value is a number
            if (globalThis.isNaN(POSSIBLE_NUMERIC_VALUE))
                throw new Error(`::: Invalid number, NaN: '${value}'`);

            const FACTOR: number = globalThis.Math.pow(10, widthPrecission);

            return (globalThis.Math.round(POSSIBLE_NUMERIC_VALUE * FACTOR) / FACTOR).toFixed(widthPrecission);
        }
    }
}