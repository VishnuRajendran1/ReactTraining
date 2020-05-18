import React, { Component } from 'react';

export class ContactListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            buttonName: 'Show List',
            buttonColor: 'blue',
            contactList:[]
        };
    }

    showHideList = () => {
        if (this.state.show) {
            this.setState({ show: false, buttonName: 'Show List', buttonColor: 'blue' });
        }
        else {
            //Calling Api to get data
            fetch(`./api/ContactListing`)
                .then((response) => {
                    response.json().then(data => {
                        this.setState({ contactList: data, show: true, buttonName: 'Hide List', buttonColor: 'red' });
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <button style={{ color: this.state.buttonColor }} onClick={this.showHideList}>{this.state.buttonName}</button>
                {this.state.show && (
                    <section id="contact-list">
                        <ContactList contacts={this.state.contactList}>
                        </ContactList>
                    </section>
                    )}
            </div>
        );
    }
}

const ContactList = ({ contacts }) => {
    return (
        <table className="contacts-table" style={{ border: "1px solid black" }}>
                <tbody>
                    <tr>
                    <th style={{ border: "1px solid black" }}>Name</th>
                        <th>Email</th>
                    </tr>
                    {contacts && contacts!=null && contacts.map((contact, i) => (
                        <tr key={i}>
                            <td style={{ border: "1px solid black" }}>{contact.name}</td>
                            <td style={{ border: "1px solid black" }}>{contact.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
};

