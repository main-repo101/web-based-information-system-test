
export namespace $it$campus$model$heading {
    export class Header {
        public readonly title?: string | undefined | null;
        public readonly subtitle?: string | undefined | null;
        // public classN?: string | undefined | null;

        constructor( 
            title: string | undefined | null = undefined,
            subtitle: string | undefined | null = undefined,
            // classN: string | undefined | null = undefined
        ) {
            this.title = title;
            this.subtitle = subtitle;
            // this.classN = classN;
        }
    }   
}


