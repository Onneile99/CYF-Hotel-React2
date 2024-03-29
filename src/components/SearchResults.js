import React from 'react';
import moment from 'moment';

const  SearchResults = (props) => {
  const tableData=props.results;
  const newTableData=tableData.map(infoData=>
    <tr>
    <th scope="row">{infoData.id}</th>
    <td>{infoData.title}</td>
    <td>{infoData.firstName}</td>
    <td>{infoData.surname}</td>
    <td>{infoData.email}</td>
    <td>{infoData.roomId}</td>
    <td>{infoData.checkInDate}</td>
    <td>{infoData.checkOutDate}</td>
    <td>{moment(infoData.checkOutDate).diff(infoData.checkInDate,"days")}</td>
  </tr> 
  )
  const handleRearchResults=()=>{
    console.log("Hello, welcome to react")
  }
  return(
    <table class="table table-striped">
  <thead>
    <tr  onClick={handleRearchResults}>
    <th scope="col"></th>
      <th scope="col">Title</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Email</th>
      <th scope="col">RoomId</th>
      <th scope="col">CheckInDate</th>
      <th scope="col">CheckOutDate</th>
      <th scope="col">Days</th>
   </tr>
  </thead>
  <tbody>
      {newTableData}
  </tbody>
</table>
  )
}


export default SearchResults;