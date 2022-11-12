// icons
import { GrClose } from "react-icons/gr";

//forms
import AddVendorForm from "../forms/AddVendorForm";

export default function AddVendorPopup({ toggler }) {
    return (
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-slate-300/50">
            <div className="flex h-4/5 w-4/5 flex-col bg-white p-4">
                {/* Popup Header */}
                <div className="flex justify-between">
                    <h3 className="text-lg">New Vendor</h3>
                    <button
                        onClick={() => {
                            toggler();
                        }}
                    >
                        <GrClose size={24} />
                    </button>
                </div>
                <div className="flex-grow py-2">
                    <AddVendorForm toggler={toggler} />
                </div>
            </div>
        </div>
    );
}
