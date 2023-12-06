import React from "react";

const BodyDataTable = ({ data }) => {
  return (
    <div>
      <h2 className="verification-information">Bill Information</h2>
      <table className="body-table">
        <tbody>
          <tr>
            <td className="title-cell">Last Update</td>
            <td>{data.updateDate}</td>
          </tr>
          <tr>
            <td className="title-cell">Congress Number</td>
            <td>{data.congress}</td>
          </tr>
          <tr>
            <td className="title-cell">Latest Action Date</td>
            <td>{data.latestAction.actionDate}</td>
          </tr>
          <tr>
            <td className="title-cell">Latest Action</td>
            <td>{data.latestAction.text}</td>
          </tr>
          <tr>
            <td className="title-cell">Bill Number</td>
            <td>{data.number}</td>
          </tr>
          <tr>
            <td className="title-cell">Origin Chamber</td>
            <td>{data.originChamber}</td>
          </tr>
          <tr>
            <td className="title-cell">Origin Chamber Code</td>
            <td>{data.originChamberCode}</td>
          </tr>
          <tr>
            <td className="title-cell">Title</td>
            <td>{data.title}</td>
          </tr>
          <tr>
            <td className="title-cell">Type</td>
            <td>{data.type}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BodyDataTable;
