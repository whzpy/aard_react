import React from "react"
import { Button } from "react-bootstrap"

const AdminSearch = ({ searchHandler }) => {
  return (
    <div
      className="search-container"
      style={{
        marginTop: "10px",
        marginLeft: "648px",
        marginRight: "15px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Search for recipes by their details ..."
        className="form-control"
        style={{ width: "400px" }}
        onChange={(e) => searchHandler(e)}
      />
    </div>
  )
}

export default AdminSearch
