import React, { useState } from 'react';

const FamilyTree = () => {
  const [familyMembers, setFamilyMembers] = useState([]);
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');

  const addMember = () => {
    if (name && relationship) {
      const newMember = { name, relationship };
      setFamilyMembers([...familyMembers, newMember]);
      setName('');
      setRelationship('');
    }
  };

  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      
      <div className="add-member">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Relationship"
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
        />
        <button onClick={addMember}>Add Member</button>
      </div>
      
      <div className="tree">
        {familyMembers.length === 0 ? (
          <p>No members added yet.</p>
        ) : (
          <ul>
            {familyMembers.map((member, index) => (
              <li key={index}>
                {member.name} - {member.relationship}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FamilyTree;
