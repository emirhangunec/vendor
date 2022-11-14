export default [
    [
        {
            inputType: "input",
            type: "text", //dropdown
            name: "salution",
            placeholder: "Salution",
            required: {
                onlyString: true,
                length: { max: 10, min: 2 },
            },
        },
        {
            inputType: "input",
            type: "text",
            name: "firstName",
            placeholder: "First Name",
            required: {
                onlyString: true,
                length: { max: 15, min: 2 },
            },
        },
        {
            inputType: "input",
            type: "text",
            name: "lastName",
            placeholder: "Last Name",
            required: {
                onlyString: true,
                length: { max: 15, min: 2 },
            },
        },
    ],
    [
        {
            inputType: "input",
            type: "text",
            name: "companyName",
            placeholder: "Company Name",
            required: {
                onlyString: true,
                length: { max: 40, min: 2 },
            },
        },
    ],
    [
        {
            inputType: "input",
            type: "text",
            name: "displayName",
            placeholder: "Display Name",
            required: {
                onlyString: true,
                length: { max: 40, min: 2 },
            },
        },
    ],
    [
        {
            inputType: "input",
            type: "email",
            name: "email",
            placeholder: "Email",
            required: {
                onlyString: true,
                length: { max: 40, min: 3 },
                mustContain: ["@", "."],
            },
        },
    ],
    [
        {
            inputType: "input",
            type: "tel",
            name: "workPhone",
            placeholder: "Work Phone",
            required: {
                onlyNumber: true,
                length: { max: 11, min: 11 },
                startsWith: "0",
            },
        },
        {
            inputType: "input",
            type: "tel",
            name: "mobilePhone",
            placeholder: "Mobile Phone",
            required: {
                onlyNumber: true,
                length: { max: 11, min: 11 },
                startsWith: "0",
            },
        },
    ],
    [
        {
            inputType: "input",
            type: "text",
            name: "website",
            placeholder: "Website",
            required: {
                onlyString: true,
                length: { max: 60, min: 5 },
                startsWith: "www.",
            },
        },
    ],
];
