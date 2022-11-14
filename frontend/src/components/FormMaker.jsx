import { useEffect, useState } from "react";

export default function FormMaker({
    items,
    submitDetails,
    deleteDetails,
    values = {},
    className,
    isLoaded = true,
}) {
    const breakPoint = "md";

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const alphabet = [
        " ",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
    ];
    const symbols = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/`;

    const inputCSS = "border-2 p-2 rounded-lg w-full";
    const submitButtonCSS =
        "rounded-xl border border-green-600 bg-green-600 px-4 py-1 text-white transition-colors hover:bg-white hover:text-green-600 disabled:opacity-50 disabled:hover:cursor-not-allowed disabled:hover:bg-green-600 disabled:hover:text-white";
    const deleteButtonCSS =
        "rounded-xl border border-red-600 hover:bg-red-600 px-4 py-1 text-red-600 transition-colors hover:text-white";

    const [inputs, SetInputs] = useState({});
    const [inputValues, SetInputValues] = useState({});
    const [reqs, SetReqs] = useState({});
    const [canSubmit, SetCanSubmit] = useState(false);

    useEffect(() => {
        SetStates();
        CheckCanSubmit();
    }, [isLoaded]);
    function SetStates() {
        items.map((section, key) => {
            section.map((item, key) => {
                inputs[item.name] = "";
                inputValues[item.name] = "";
                reqs[item.name] = "";
                inputs[item.name] = document.getElementsByName(
                    item.name
                )[0].children[0];
                if (values && values[item.name]) {
                    inputValues[item.name] = values[item.name];
                }
                reqs[item.name] = item.required;
            });
        });
        SetInputs(inputs);
        SetReqs(reqs);
        SetInputValues(inputValues);
    }
    function isNumber(value) {
        return ![...alphabet, ...symbols].some((c) => value.includes(c));
    }
    function isString(value) {
        return !numbers.some((c) => value.includes(c));
    }
    function contains(value, mustContain) {
        return mustContain.every((c) => value.includes(c));
    }
    function CheckCanSubmit() {
        SetCanSubmit(false);
        //checks all inputs are filled
        if (
            Object.keys(inputs).length === Object.keys(inputValues).length &&
            Object.keys(inputValues).every((key) => inputValues[key])
        ) {
            SetCanSubmit(true);
        }
    }
    function HandleChange(e) {
        inputValues[e.target.name] = "";
        const input = inputs[e.target.name];
        const req = reqs[e.target.name];
        const infobox = input.parentElement.children[1];
        let errorText = "";
        let css = "";
        if (req.onlyString && e.target.value) {
            if (!isString(e.target.value) && e.target.name !== "email") {
                errorText = "This isn't a string!";
                css = " border-red-600 bg-red-200";
            }
            // starts with
            else if (
                req.mustContain &&
                !contains(e.target.value, req.mustContain)
            ) {
                errorText = "Must contain " + req.mustContain;
                css = " border-red-600 bg-red-200";
            }
            // starts with
            else if (
                req.startsWith &&
                !e.target.value.startsWith(req.startsWith)
            ) {
                errorText = "Must start with " + req.startsWith;
                css = " border-red-600 bg-red-200";
            }
            // min length
            else if (e.target.value.length < req.length.min) {
                errorText = "This is shorter than " + req.length.min;
                css = " border-red-600 bg-red-200";
            }
            // max length
            else if (e.target.value.length > req.length.max) {
                errorText = "This is longer than " + req.length.max;
                css = " border-red-600 bg-red-200";
            } else {
                css = " border-green-500 bg-green-200";
                inputValues[e.target.name] = e.target.value;
            }
        }
        if (req.onlyNumber && e.target.value) {
            if (!isNumber(e.target.value)) {
                errorText = "This isn't number!";
                css = " border-red-500 bg-red-200";
            }
            // starts with
            else if (!e.target.value.startsWith(req.startsWith)) {
                errorText = "Must start with " + req.startsWith;
                css = " border-red-500 bg-red-200";
            }
            // min length
            else if (e.target.value.length < req.length.min) {
                errorText = "This is shorter than " + req.length.min;
                css = " border-red-500 bg-red-200";
            }
            // max length
            else if (e.target.value.length > req.length.max) {
                errorText = "This is longer than " + req.length.max;
                css = " border-red-500 bg-red-200";
            } else {
                css = " border-green-500 bg-green-200";
                inputValues[e.target.name] = e.target.value;
            }
        }
        infobox.innerHTML = errorText;
        input.className = inputCSS + css;
        SetInputValues(inputValues);
        CheckCanSubmit();
    }
    function HandleSubmit(e) {
        e.preventDefault();
        CheckCanSubmit();
        let options = {
            method: submitDetails.method,
            headers: submitDetails.headers,
            body: JSON.stringify(inputValues),
        };
        fetch(submitDetails.url, options)
            .then((res) => res.json())
            .then((json) => {
                submitDetails.onSuccess();
            })
            .catch((err) => console.error("error:" + err));
    }
    function HandleDelete(e) {
        e.preventDefault();
        let options = {
            method: deleteDetails.method,
            headers: deleteDetails.headers,
        };

        fetch(deleteDetails.url, options)
            .then((res) => deleteDetails.onSuccess())
            .catch((err) => console.error("error:" + err));
    }
    return (
        <form
            method="POST"
            className={"flex flex-grow flex-col gap-2 " + className}
        >
            {items.map((sections, key) => {
                return (
                    <div
                        key={key}
                        className={`grid gap-2 ${breakPoint}:grid-cols-${sections.length}`}
                    >
                        {sections.map((item, key) => {
                            if (item.inputType === "input") {
                                return (
                                    <div
                                        name={item.name}
                                        key={key}
                                    >
                                        <input
                                            onChange={HandleChange}
                                            name={item.name}
                                            className={inputCSS}
                                            type={item.type}
                                            placeholder={item.placeholder}
                                            defaultValue={values[item.name]}
                                        />
                                        <p className="text-red-600"></p>
                                    </div>
                                );
                            }
                        })}
                    </div>
                );
            })}
            {/* buttons */}
            <div className="flex flex-row-reverse gap-x-4">
                {submitDetails && (
                    <button
                        name="Submit"
                        onClick={HandleSubmit}
                        className={submitButtonCSS}
                        disabled={!canSubmit}
                    >
                        Save
                    </button>
                )}
                {deleteDetails && (
                    <button
                        name="Delete"
                        onClick={HandleDelete}
                        className={deleteButtonCSS}
                    >
                        Delete
                    </button>
                )}
            </div>
        </form>
    );
}
