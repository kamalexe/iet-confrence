// components/MemberCard.jsx
const MemberCard = ({ image, name, role, designation }) => {
  return (
    <div className="container bg-glass h-100 text-center p-3 bg-transparent text-white">
      <img
        src={image}
        alt={name}
        className="card-img-top mx-auto rounded-circle"
        style={{ width: '120px', height: '120px', objectFit: 'cover' }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = placeholder;
        }}
      />
      <div className="card-body mt-3">
        {role && <p className="card-text mb-1">{role}</p>}
        <h5 className="card-title">{name}</h5>
        {designation && (
          <p className="card-text small">{designation}</p>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
