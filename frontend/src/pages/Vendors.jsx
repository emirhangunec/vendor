import { useEffect, useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
// icons
import { FaPlus } from "react-icons/fa";
// components
import VendorListItem from "../components/VendorListItem";
import AddVendorPopup from "../components/AddVendorPopup";

export default function Vendors() {
    const [vendors, SetVendors] = useState([]);
    const [isloading, SetIsLoading] = useState(true);
    const [isAddVendorPopupOpen, setIsAddVendorPopupOpen] = useState(false);
    //handles the popup display, and updates vendors when popup is closed
    function ToggleAddVendorPopup() {
        if (isAddVendorPopupOpen) {
            SetIsLoading(true);
            setIsAddVendorPopupOpen(false);
            enableBodyScroll(document);
        } else {
            setIsAddVendorPopupOpen(true);
            disableBodyScroll(document);
        }
    }
    // get vendors from api
    useEffect(async () => {
        await (
            await fetch("http://localhost:3001/vendors")
        )
            .json()
            .then((response) => {
                if (response !== vendors) SetVendors(response);
                SetIsLoading(false);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, [isloading]);
    return (
        <>
            <div className="flex flex-col gap-y-4">
                {/* page header */}
                <div className="flex justify-between">
                    <h2 className="text-xl">Vendors</h2>
                    <button
                        onClick={() => {
                            ToggleAddVendorPopup();
                        }}
                        className="flex items-center gap-x-2 rounded-xl border border-green-600 bg-green-600 px-4 py-2 text-white transition-colors hover:bg-white hover:text-green-600"
                    >
                        <FaPlus /> Add
                    </button>
                </div>
                {/* vendor list */}
                <div className="flex-grow">
                    {/* vendor list header */}
                    <div className=" grid w-full grid-cols-2 md:grid-cols-5">
                        <h3 className="border-b p-2 text-lg">Name</h3>
                        <h3 className="hidden border-b p-2 text-lg md:block">
                            Company Name
                        </h3>
                        <h3 className="hidden border-b p-2 text-lg md:block">
                            E-mail
                        </h3>
                        <h3 className="hidden border-b p-2 text-lg md:block">
                            Work Phone
                        </h3>
                        <h3 className="border-b p-2 text-lg">Payables Code</h3>
                    </div>
                    {/* vendor items */}
                    {isloading ? (
                        // Loading Animation
                        <div className="w-full animate-pulse py-8 text-center text-2xl">
                            Loading
                        </div>
                    ) : (
                        vendors.map((vendor, key) => {
                            return (
                                <VendorListItem
                                    key={key}
                                    id={key}
                                    vendor={vendor}
                                />
                            );
                        })
                    )}
                </div>
            </div>
            {/* popup manager */}
            {isAddVendorPopupOpen ? (
                <AddVendorPopup toggler={ToggleAddVendorPopup} />
            ) : (
                ""
            )}
        </>
    );
}
