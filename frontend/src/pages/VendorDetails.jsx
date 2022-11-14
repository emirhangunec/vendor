import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Components
import Loading from "../components/Loading";
import FormMaker from "../components/FormMaker";
import VendorFormItems from "../data/VendorFormItems";

export default function VendorDetails() {
    const [isloading, SetIsLoading] = useState(true);
    const [values, SetValues] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(async () => {
        await (
            await fetch(`http://localhost:3001/vendors/${id}`)
        )
            .json()
            .then((response) => {
                SetValues(response);
                SetIsLoading(false);
            })
            .catch((err) => {
                console.error(err.message);
            });
    }, []);

    const submitDetails = {
        url: `http://localhost:3001/vendors/${id}`,
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        onSuccess: () => {
            window.location.reload(false);
        },
    };

    const deleteDetails = {
        url: `http://localhost:3001/vendors/${id}`,
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        onSuccess: () => navigate("/vendors"),
    };

    return (
        <div className="flex flex-col justify-between">
            {/* Vendor Header */}
            <h3 className="text-lg">Edit Vendor</h3>
            {/* Vendor Form */}
            <div className="flex-grow py-2">
                {isloading ? (
                    <Loading />
                ) : (
                    <FormMaker
                        items={VendorFormItems}
                        values={values}
                        submitDetails={submitDetails}
                        deleteDetails={deleteDetails}
                    />
                )}
            </div>
        </div>
    );
}
