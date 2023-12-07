import React from "react";

const BodyDataTable = ({ data }) => {
  return (
    <div>
      <h2 className="verification-information">Bill Information</h2>
      <table className="body-table">
        <tbody>
          <tr>
            <td className="title-cell">Last Update</td>
            <td className="description-cell">{data.updateDate}</td>
          </tr>
          <tr>
            <td className="title-cell">Congress Number</td>
            <td className="description-cell">{data.congress}</td>
          </tr>
          <tr>
            <td className="title-cell">Latest Action Date</td>
            <td className="description-cell">{data.latestAction.actionDate}</td>
          </tr>
          <tr>
            <td className="title-cell">Latest Action</td>
            <td className="description-cell">{data.latestAction.text}</td>
          </tr>
          <tr>
            <td className="title-cell">Bill Number</td>
            <td className="description-cell">{data.number}</td>
          </tr>
          <tr>
            <td className="title-cell">Origin Chamber</td>
            <td className="description-cell" >{data.originChamber}</td>
          </tr>
          <tr>
            <td className="title-cell">Origin Chamber Code</td>
            <td className="description-cell">{data.originChamberCode}</td>
          </tr>
          <tr>
            <td className="title-cell">Title</td>
            <td className="description-cell">{data.title}</td>
          </tr>
          <tr>
            <td className="title-cell">Type</td>
            <td className="description-cell">{data.type}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BodyDataTable;
