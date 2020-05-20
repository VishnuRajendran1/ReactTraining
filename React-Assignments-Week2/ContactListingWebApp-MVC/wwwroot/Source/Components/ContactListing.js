
 contactManagement = React.createElement(
    "section",
    { id: "contact-list" },
    React.createElement("h1", null, "Contacts"),
    React.createElement(
        "table",
        { className: "contacts-table" },
        React.createElement(
            "tbody",
            null,
            React.createElement(
                "tr",
                null,
                React.createElement("th", null, "Name"),
                React.createElement("th", null, "Email")
            ),
            React.createElement(
                "tr",
                null,
                React.createElement("td", null, "Vishnu Rajendran"),
                React.createElement("td", null, "vrajendran@suyati.com")
            ),
            React.createElement(
                "tr",
                null,
                React.createElement("td", null, "Praphul"),
                React.createElement("td", null, "pnangeelil@suyati.com")
            ),
            React.createElement(
                "tr",
                null,
                React.createElement("td", null, "Shamnad V A"),
                React.createElement("td", null, "sabdul@suyati.com")
            )
        )
    )
);

ReactDOM.render(contactManagement, document.getElementById("react-container"));