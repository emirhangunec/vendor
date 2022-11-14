import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import AddCustomerPopup from "../components/AddCustomerPopup";

export default function Customers() {
    const [customers, SetCustomers] = useState([]);
    const [isloading, SetIsLoading] = useState(true);
    const [isAddCustomerPopupOpen, setIsAddCustomerPopupOpen] = useState(false);
    //handles the popup display, and updates vendors when popup is closed
    function ToggleAddCustomersPopup() {
        if (isAddCustomerPopupOpen) {
            SetIsLoading(true);
            setIsAddCustomerPopupOpen(false);
        } else {
            setIsAddCustomerPopupOpen(true);
        }
    }
    // get vendors from api
    useEffect(async () => {
        await (
            await fetch("http://localhost:3001/vendors")
        )
            .json()
            .then((response) => {
                if (response !== customers) SetCustomers(response);
                SetIsLoading(false);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, [isloading]);
    return (
        <div className="flex flex-col gap-y-4">
            {/* page header */}
            <div className="flex justify-between">
                <h2 className="text-xl">Customers</h2>
                <button
                    onClick={() => ToggleAddCustomersPopup()}
                    className="flex items-center gap-x-2 rounded-xl border border-green-600 bg-green-600 px-4 py-2 text-white transition-colors hover:bg-white hover:text-green-600"
                >
                    <FaPlus /> Add
                </button>
            </div>
            {/* TODO: customers list */}
            {/* add popup */}
            <AddCustomerPopup
                isShown={isAddCustomerPopupOpen}
                toggler={ToggleAddCustomersPopup}
            />
        </div>
    );
}
