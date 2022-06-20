import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";
import React from "react";

export default function Table() {
  return (
    <MDBTable bordered borderColor="info" small>
      <MDBTableHead>
        <tr>
          <th scope="col">No.</th>
          <th width="100%" scope="col">
            Drug Name
          </th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>1</td>
          <td width="100%">Vasaral MR</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}
