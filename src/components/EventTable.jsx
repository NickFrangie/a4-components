import React from "react";

const EventTable = (props) => {
  return (
    <div class="row d-flex m-0 justify-content-center">
      <table class="table table-hover col-sm-8 border border-muted">
        <thead class="thead-light">
          <tr>
            <th scope="col">Event</th>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
            <th scope="col">Mandatory</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.children}
        </tbody>
      </table>
    </div>
  )
}

export default EventTable;