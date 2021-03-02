import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterList from "../components/FilterList";
import DisplayList from "../components/DisplayList";
import MainContext from "../context/context";
import { Title, Wrapper } from "../styledComponents/styledComponents";

const Root = () => {
  const [contactList, setContactList] = useState([]);
  const [filteredContactList, setFilteredContactList] = useState([
    ...contactList,
  ]);

  const displaySelectedId = (id) => {
    console.log(id);
  };

  const getContactList = () => {
    axios
      .get(
        "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json"
      )
      .then((response) => {
        setContactList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const sortContactListByLastName = () => {
    const sortedList = contactList.sort((contact1, contact2) => {
      return contact1.last_name.localeCompare(contact2.last_name);
    });
    setFilteredContactList([...sortedList]);
  };

  const setFilterInputSearch = (e) => {
    const selectedContacts = contactList.filter(
      (contact) =>
        contact.first_name
          .toUpperCase()
          .includes(e.target.value.toUpperCase()) ||
        contact.last_name.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setFilteredContactList([...selectedContacts]);
  };

  useEffect(() => {
    getContactList();
  }, []);

  useEffect(() => {
    setFilteredContactList([...contactList]);
    sortContactListByLastName();
  }, [contactList]);

  return (
    <MainContext.Provider
      value={{
        contactList,
        setFilterInputSearch,
        filteredContactList,
        displaySelectedId,
      }}
    >
      <Title>Contacts</Title>
      <Wrapper>
        <FilterList />
        <DisplayList />
      </Wrapper>
    </MainContext.Provider>
  );
};

export default Root;
