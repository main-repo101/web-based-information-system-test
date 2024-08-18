import { NavLink } from 'react-router-dom';
import { $it$campus$model$heading as $heading } from '@main/it/campus/model/heading/package-info.mts';

export default function Logo(
    { header, className }: $heading.FCHeader
): React.ReactElement
{
    return <>
    <NavLink to="/" className={`${className}`}>
        <h1>{header?.title}</h1>
    </NavLink>
    </>;
}