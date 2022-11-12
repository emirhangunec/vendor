import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function EditVendorForm() {
    const [inputs, setInputs] = useState({});
    const { id } = useParams();
    //sets input boxes from fetched vendor by id
    function SetValues(params) {
        const inputList = document.getElementsByTagName("input");
        [...inputList].map((e) => {
            if (params[e.name] !== undefined) {
                e.value = params[e.name];
                let r = inputs;
                r[e.name] = e.value;
                setInputs(r);
            }
        });
    }
    useEffect(async () => {
        await (
            await fetch(`http://localhost:3001/vendors/${id}`)
        )
            .json()
            .then((response) => {
                SetValues(response);
                console.log(response);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);
    const HandleChange = (e) => {
        let r = inputs;
        r[e.target.name] = e.target.value;
        setInputs(r);
    };
    const HandleSubmit = async (e) => {
        // e.preventDefault();s
        let url = `http://localhost:3001/vendors/${id}`;
        let options = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputs),
        };

        fetch(url, options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
            })
            .catch((err) => console.error("error:" + err));
    };
    const DeleteVendor = async (e) => {
        // e.preventDefault();s
        let url = `http://localhost:3001/vendors/${id}`;
        let options = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputs),
        };

        fetch(url, options)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
            })
            .catch((err) => console.error("error:" + err));
    };
    return (
        <form
            method="post"
            className="flex flex-col gap-2 "
        >
            <div className="grid-cols grid gap-2 md:grid-cols-3">
                {/* TODO: make salution is a dropbox */}
                <input
                    onChange={HandleChange}
                    className={"border p-2 "}
                    type="text"
                    name="salution"
                    placeholder="Salution"
                />

                <input
                    onChange={HandleChange}
                    className="border p-2"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                />

                <input
                    onChange={HandleChange}
                    className="border p-2"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                />
            </div>
            <div className="grid-cols grid gap-2 md:grid-cols-1">
                <input
                    onChange={HandleChange}
                    className="border p-2"
                    type="text"
                    name="companyName"
                    placeholder="Company Name"
                />
            </div>
            <div className="grid-cols grid gap-2 md:grid-cols-1">
                <input
                    onChange={HandleChange}
                    className="border p-2"
                    type="text"
                    name="displayName"
                    placeholder="Vendor Display Name*"
                />
            </div>
            <div className="grid-cols grid gap-2 md:grid-cols-1">
                <input
                    onChange={HandleChange}
                    className="border p-2"
                    type="text"
                    name="email"
                    placeholder="Vendor Email"
                />
            </div>
            <div className="grid-cols grid gap-2 md:grid-cols-2">
                <input
                    onChange={HandleChange}
                    className="border p-2"
                    type="text"
                    name="workPhone"
                    placeholder="Work Phone"
                />
                <input
                    onChange={HandleChange}
                    className="border p-2"
                    type="text"
                    name="mobilePhone"
                    placeholder="Mobile Phone"
                />
            </div>
            <div className="grid-cols grid gap-2 md:grid-cols-1">
                <input
                    onChange={HandleChange}
                    className="border p-2"
                    type="text"
                    name="website"
                    placeholder="Website"
                />
            </div>
            <div className="grid-cols flex w-full justify-end gap-2 md:grid-cols-1">
                <Link
                    to="/vendors"
                    onClick={DeleteVendor}
                    className="rounded-xl border border-red-600 bg-white px-4 py-1 text-red-600 transition-colors hover:bg-red-600 hover:text-white disabled:opacity-50 disabled:hover:cursor-not-allowed disabled:hover:bg-red-600 disabled:hover:text-white"
                >
                    Delete
                </Link>
                <Link
                    to="/vendors"
                    onClick={HandleSubmit}
                    className="rounded-xl border border-green-600 bg-green-600 px-4 py-1 text-white transition-colors hover:bg-white hover:text-green-600 disabled:opacity-50 disabled:hover:cursor-not-allowed disabled:hover:bg-green-600 disabled:hover:text-white"
                >
                    Save
                </Link>
            </div>
        </form>
    );
}
