
export namespace $it$campus$util {

    export class Date {

        public static readonly DEFAULT_FORMAT: string = `MM/DD/YYYY-hh:mm:ss x`;
        private currentFormat: string;
        private timeZoneOffset: number;

        constructor( 
            currentFormat: string = Date.DEFAULT_FORMAT, 
            timeZoneOffset: number = new globalThis.Date().getTimezoneOffset()
        ) {
            this.currentFormat = currentFormat;
            this.timeZoneOffset = timeZoneOffset;
        }

        private pad( chronNum: number, width: number  = 2 ): string {
            return chronNum.toString().padStart(width, "0");
        }

        public setDateFormat( format?: string | undefined | null ): void {
            this.currentFormat = format?.trim() || this.currentFormat;
        }

        public getDateFormat(): string {
            return this.currentFormat;
        }

        public setTimeZoneOffset( timeZoneOffset?: number | undefined | null ): void {
            this.timeZoneOffset = timeZoneOffset || this.timeZoneOffset;
        }

        public getTimeZoneOffset(): number {
            return this.timeZoneOffset;
        }

        public getFormatTimestamp( 
            format?: string | undefined | null
        ): string {

            format = format?.trim() || this.currentFormat;

            const DATE = new globalThis.Date(globalThis.Date.now());

            const YEAR: string = DATE.getFullYear().toString();
            const MONTH: string = this.pad( DATE.getMonth() + 1 );
            const DAY: string = this.pad( DATE.getDate() );

            const ALPHA_HOUR: number = DATE.getHours();
            const HOUR: string = this.pad( ALPHA_HOUR % 12 || 12 );
            const MINUTE: string = this.pad( DATE.getMinutes() );
            const SECOND: string = this.pad( DATE.getSeconds() );

            const PERIOD: string = ALPHA_HOUR >= 12 ? `pm` : `am`;

            const RESULT_FORMAT = format
                .replace(/YYYY/g, YEAR)
                .replace(/MM/g, MONTH)
                .replace(/DD/g, DAY)
                .replace(/hh/g, HOUR)
                .replace(/mm/g, MINUTE)
                .replace(/ss/g, SECOND)
                // .replace(/x|X/gi, PERIOD);
                .replace(/x/g, PERIOD.toLowerCase() )
                .replace(/X/g, PERIOD.toUpperCase() );
            
            return RESULT_FORMAT;
        }

    }
}