import { NavLink } from "react-router-dom";

// check if item has setter function and hasn't link, so return a button. else return navlink
export default function SidebarItem({ item, isExpanded }) {
    if (
        item.setter !== undefined &&
        item.getter !== undefined &&
        item.link === undefined
    ) {
        return (
            <button
                onClick={() => {
                    item.setter(!item.getter);
                }}
                className="flex gap-x-2 border-l-2 border-[#000080] p-4 text-white transition-colors hover:border-[#E0B0FF] hover:text-[#E0B0FF]"
            >
                {!isExpanded ? item.icons[0] : item.icons[1]}
                {isExpanded ? item.name : ""}
            </button>
        );
    } else {
        return (
            <NavLink
                to={item.link}
                className="flex gap-x-2 border-l-2 border-[#000080] p-4 text-white transition-colors hover:border-[#E0B0FF] hover:text-[#E0B0FF]"
            >
                {!isExpanded ? item.icons[0] : item.icons[1]}
                {isExpanded ? item.name : ""}
            </NavLink>
        );
    }
}
