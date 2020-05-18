const data = [
    {
        name: "Shinto Thomas",
        email: "sthomas@suyati.com",
    },
    {
        name: "Praphul",
        email: "pnangeelil@suyati.com",
    },
    {
        name: "Shamnad",
        email: "sabdul@suyati.com",
    },
];


const ContactList = ({ contacts }) => {
    return <table className="contacts-table">
        <tbody>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            {contacts.map((contact, i) => {
                return <tr key={i}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                </tr>
            })}
        </tbody>
    </table>;
};

const contactManagement1 = <section id="contact-list">
    <h1>Contacts</h1>
    <ContactList contacts={data}>

    </ContactList>
</section>;


ReactDOM.render(
    contactManagement1,
    document.getElementById("react-container")
);