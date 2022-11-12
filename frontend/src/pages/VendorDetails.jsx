// Forms
import EditVendorForm from "../forms/EditVendorForm";

export default function VendorDetails() {
    return (
        <div className="flex flex-col justify-between">
            {/* Vendor Header */}
            <h3 className="text-lg">Edit Vendor</h3>
            {/* Vendor Form */}
            <div className="flex-grow py-2">
                <EditVendorForm />
            </div>
        </div>
    );
}
