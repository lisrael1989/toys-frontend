import React from 'react'
import { ToyPreview } from "./ToyPreview.jsx";
import { Link, NavLink } from "react-router-dom";

export function ToyList({ toys, onRemove }) {

  if (!toys) return null;

  return (
    <ul className="toy-list">
      {toys.map((toy) => (
        <li key={toy._id}>
          <ToyPreview
            toy={toy}
            onRemove={onRemove} />

          <div className="toy-actions">
            <button> <NavLink to={`/toy/edit/${toy._id}`}>Edit</NavLink> </button>
            <button> <NavLink to={`/toy/${toy._id}`}>Details</NavLink> </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
