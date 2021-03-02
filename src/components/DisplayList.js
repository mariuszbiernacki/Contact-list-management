import React, { useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MainContext from "../context/context";
import noPicture from "../assets/images/image_not_found.jpg";
import { Image } from "../styledComponents/styledComponents";

const DisplayList = () => {
  const value = useContext(MainContext);
  const { filteredContactList, displaySelectedId } = value;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell align="left">First and Last Name</TableCell>
            <TableCell align="left">Select</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredContactList.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell component="th" scope="row">
                <Image
                  src={contact.avatar === null ? noPicture : contact.avatar}
                  alt="avatar"
                />
              </TableCell>
              <TableCell align="left">{`${contact.first_name} ${contact.last_name}`}</TableCell>
              <TableCell align="left">
                <input
                  type="checkbox"
                  onChange={() => displaySelectedId(contact.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DisplayList;
