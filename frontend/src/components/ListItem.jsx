import { Link } from "react-router-dom";
export default function ListItem({ item, id }) {
    return (
        <Link
            to={item._id}
            key={id}
            className={
                id % 2 === 0
                    ? "grid w-full grid-cols-2 border-b bg-slate-300 transition-colors hover:bg-slate-400   lg:grid-cols-5"
                    : "grid w-full grid-cols-2 border-b transition-colors hover:bg-slate-400 lg:grid-cols-5 "
            }
        >
            <p className="border-x p-2 pl-2">
                {item.salution + ". " + item.firstName + " " + item.lastName}
            </p>
            {/* hides some of values when screen gets narrow, also header in items file hides too. */}
            <p className="hidden border-r p-2 pl-2 lg:block">
                {item.companyName}
            </p>
            <p className="hidden border-r p-2 pl-2 lg:block">{item.email}</p>
            <p className="hidden border-r p-2 pl-2 lg:block">
                {item.workPhone}
            </p>
            <p className="border-r p-2 pl-2">?</p>
        </Link>
    );
}
