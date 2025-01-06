import React, { useState } from 'react';
import './FamilyTree.css';
import { familyData } from './Familydata';

const FamilyTreePage = () => {
  const [expanded, setExpanded] = useState(new Set());

  // Sample family tree data
  
  const handleClick = (id) => {
    const newExpanded = new Set(expanded);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpanded(newExpanded);
  };

  const renderFamilyTree = (member) => {
    const isExpanded = expanded.has(member.id);

    return (
      <div className="member" key={member.id}>
        <div className="member-info" onClick={() => handleClick(member.id)}>
          <span className="member-name">{member.name}</span>
          {member.children.length > 0 && (
            <span className={`toggle ${isExpanded ? 'expanded' : ''}`}>
              {isExpanded ? '−' : '+'}
            </span>
          )}
        </div>
        {isExpanded && member.children.length > 0 && (
          <div className="children">
            {member.children.map((child) => renderFamilyTree(child))}
          </div>
        )}
        {isExpanded && member.details && (
          <div className="member-details">{member.details}</div>
        )}
      </div>
    );
  };

  return (
    <div className="family-tree">
      <h1>Interactive Family Tree</h1>
      <div className="tree-container">
        {familyData.map((member) => renderFamilyTree(member))}
      </div>
    </div>
  );
};

export default FamilyTreePage;
