import { Link } from "react-router-dom";
export default function VendorListItem({ vendor, id }) {
    return (
        <Link
            to={vendor._id}
            key={id}
            className={
                id % 2 === 0
                    ? "grid w-full grid-cols-2 border-b bg-slate-300 transition-colors hover:bg-slate-400   md:grid-cols-5"
                    : "grid w-full grid-cols-2 border-b transition-colors hover:bg-slate-400 md:grid-cols-5 "
            }
        >
            <p className="border-x p-2 pl-2">
                {vendor.salution +
                    ". " +
                    vendor.firstName +
                    " " +
                    vendor.lastName}
            </p>
            {/* hides some of values when screen gets narrow, also header in vendors file hides too. */}
            <p className="hidden border-r p-2 pl-2 md:block">
                {vendor.companyName}
            </p>
            <p className="hidden border-r p-2 pl-2 md:block">{vendor.email}</p>
            <p className="hidden border-r p-2 pl-2 md:block">
                {vendor.workPhone}
            </p>
            <p className="border-r p-2 pl-2">?</p>
        </Link>
    );
}
