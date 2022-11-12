import { Outlet } from "react-router-dom";
import Sidebar from "./pages/Sidebar";
export default function App() {
    return (
        <div className="flex h-full w-full">
            <Sidebar />
            <div className="flex-grow p-8">
                {/* this component dynamically changes by route */}
                <Outlet />
            </div>
        </div>
    );
}
