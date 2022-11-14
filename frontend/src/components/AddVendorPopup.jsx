// icons
import { GrClose } from "react-icons/gr";
import VendorFormItems from "../data/VendorFormItems";

//forms

import FormMaker from "./FormMaker";
import Popup from "./Popup";

export default function AddVendorPopup({ isShown, toggler }) {
    const header = (
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
    );
    const submitDetails = {
        url: "http://localhost:3001/vendors/",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        onSuccess: toggler,
    };

    return (
        <Popup
            // width="w-3/5"
            // height="h-4/5"
            isShown={isShown}
            Header={header}
            Body={
                <FormMaker
                    submitDetails={submitDetails}
                    items={VendorFormItems}
                />
            }
        />
    );
}
