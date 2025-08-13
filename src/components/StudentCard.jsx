import React from "react";

const StudentCard = ({ image, name, branch, year, designation }) => {
  return (
    <div className="col-md-4">
      <div className="d-flex align-items-center bg-glass bg-transparent text-white p-3 rounded shadow-sm">
        {/* Student Image */}
        <img
          src={image}
          alt={name}
          className="rounded-circle me-3"
          style={{ width: "70px", height: "70px", objectFit: "cover" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/placeholder.webp"; // fallback image
          }}
        />

        {/* Student Details */}
        <div>
          <h5 className="mb-1">{name}</h5>
          {branch && <p className="mb-0 small">{branch}</p>}
          {year && <p className="mb-0 small">{year}</p>}
          {designation && (
            <p
              className="mb-0 small"
              dangerouslySetInnerHTML={{ __html: designation }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
