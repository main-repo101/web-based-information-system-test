
import React from "react";
import { NavLink as ReactNavLink } from "react-router-dom";

import { $web_base_information_system as $main } from "@main/package-info.mts";

type PropsFCHeader = $main.$it$campus$model$heading.FCHeader;

interface Path {
    url: string;
}

export namespace $it$campus$component$navigation {
    export class NavLink extends React.Component<PropsFCHeader&Path> {

        constructor( props: PropsFCHeader&Path ) {
            super(props);
            console.log("::: 1st init")
        }

        public componentDidMount(): void {
            console.log("::: 2nd init")
        }

        public componentWillUnmount(): void {
            console.log("::: destructor")
        }

        public componentDidUpdate(
            prevProps: Readonly<PropsFCHeader&Path>, 
        ): void {
            if( prevProps.header?.title !== this.props.header?.title )
                console.log("::: props had been changed.");
        }

        //REM: [TODO]
        public activeClassName( isActive: boolean ): string {
            return isActive? `text-blue-600` : `text-orange-600`;
        } 

        public render(): React.ReactNode {
            return <>
            <ReactNavLink to={this.props.url} 
            className={({isActive})=>this.activeClassName(isActive)}>
                {this.props.children}</ReactNavLink>
            </>;
        }
    }
}

