const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      // Use getActions to call a function within a function
      loadContacts: async () => {
        try {
          let response = await fetch(
            "https://playground.4geeks.com/apis/fake/contact/agenda/sicr2000"
          );
          let data = await response.json();
          setStore({
            contacts: data,
          });
        } catch (error) {
          console.log(error);
        }
      },
      deleteContact: async (selectedContactId) => {
        try {
          let response = await fetch(
            `https://playground.4geeks.com/apis/fake/contact/${selectedContactId}`,
            { method: "DELETE" }
          );
          if (response.ok) {
            let data = await response.json();
            getActions().loadContacts();
          }
        } catch (error) {
          console.log(error);
        }
      },
      addContact: async (selectedContact) => {
        try {
          let response = await fetch(
            "https://playground.4geeks.com/apis/fake/contact/",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                agenda_slug: "sicr2000",
                email: selectedContact.email,
                full_name: selectedContact.full_name,
                phone: selectedContact.phone,
                address: selectedContact.address,
              }),
            }
          );
          if (response.ok) {
            let data = await response.json();
            getActions().loadContacts();
          }
        } catch (error) {
          console.log(error);
        }
      },
      editContact: async (selectedContact) => {
        try {
          let response = await fetch(
            `https://playground.4geeks.com/apis/fake/contact/${selectedContact.id}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                full_name: selectedContact.full_name,
                email: selectedContact.email,
                agenda_slug: "sicr2000",
                address: selectedContact.address,
                phone: selectedContact.phone,
              }),
            }
          );
          if (response.ok) {
            let data = await response.json();
            console.log(data);
            getActions().loadContacts();
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
