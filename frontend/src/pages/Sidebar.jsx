import { useState } from "react";
import SidebarItem from "../components/SidebarItem";

// icons
import {
    FaHome,
    FaGripHorizontal,
    FaApple,
    FaShoppingCart,
    FaChartPie,
    FaRegCalendarAlt,
    FaChartLine,
    FaChartBar,
    FaImages,
    FaFacebookMessenger,
    FaCog,
    FaSignOutAlt,
    FaUserCircle,
    FaMoon,
} from "react-icons/fa";
import {
    TbLayoutSidebarRightCollapse,
    TbLayoutSidebarRightExpand,
} from "react-icons/tb";

// components
import SidebarSeperator from "../components/SidebarSeperator";

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const sidebarItems = [
        {
            name: "Toggle Sidebar",
            icons: [
                <TbLayoutSidebarRightCollapse size={24} />,
                <TbLayoutSidebarRightExpand size={24} />,
            ],
            setter: setIsExpanded,
            getter: isExpanded,
        },
        {
            isSeperator: true,
        },
        {
            name: "Home",
            icons: [<FaHome size={24} />, <FaHome size={24} />],
            link: "/",
        },
        {
            name: "Dashboard",
            icons: [
                <FaGripHorizontal size={24} />,
                <FaGripHorizontal size={24} />,
            ],
            link: "/dashboard",
        },
        {
            name: "Products",
            icons: [<FaChartPie size={24} />, <FaChartPie size={24} />],
            link: "/products",
        },
        {
            name: "Vendors",
            icons: [<FaApple size={24} />, <FaApple size={24} />],
            link: "/vendors",
        },
        {
            name: "Order",
            icons: [<FaShoppingCart size={24} />, <FaShoppingCart size={24} />],
            link: "/order",
        },
        {
            name: "Calendar",
            icons: [
                <FaRegCalendarAlt size={24} />,
                <FaRegCalendarAlt size={24} />,
            ],
            link: "/calendar",
        },
        {
            name: "Activity",
            icons: [<FaChartLine size={24} />, <FaChartLine size={24} />],
            link: "/activity",
        },
        {
            name: "Static",
            icons: [<FaChartBar size={24} />, <FaChartBar size={24} />],
            link: "/static",
        },
        {
            name: "Documents",
            icons: [<FaImages size={24} />, <FaImages size={24} />],
            link: "/documents",
        },
        {
            isSeperator: true,
        },
        {
            name: "Chat",
            icons: [
                <FaFacebookMessenger size={24} />,
                <FaFacebookMessenger size={24} />,
            ],
            link: "/chat",
        },
        {
            name: "Settings",
            icons: [<FaCog size={24} />, <FaCog size={24} />],
            link: "/settings",
        },
        {
            name: "Log out",
            icons: [<FaSignOutAlt size={24} />, <FaSignOutAlt size={24} />],
            link: "/logout",
        },
        {
            isSeperator: true,
        },
        {
            name: "John Doe",
            icons: [<FaUserCircle size={24} />, <FaUserCircle size={24} />],
            link: "/profile",
        },
        {
            isSeperator: true,
        },
        {
            name: "Dark Mode",
            icons: [<FaMoon size={24} />, <FaMoon size={24} />],
            setter: "DarkMode",
            getter: "darkMode",
        },
    ];
    return (
        <div className="flex flex-col bg-[#000080]">
            {/* create sidebar items */}
            {sidebarItems.map((item, key) => {
                if (!item.isSeperator) {
                    return (
                        <SidebarItem
                            item={item}
                            isExpanded={isExpanded}
                            key={key}
                        />
                    );
                }

                //return seperator
                else return <SidebarSeperator key={key} />;
            })}
        </div>
    );
}
