import React from "react";

const CopyrightFooter = () => {
  const date = new Date();
  return (
    <div style={{ fontSize: 14, textAlign: "center", padding: '8px 48px', display: 'flex', justifyContent: 'space-between' }}>
      <div>© {date.getFullYear()} Managed By <strong><a rel="noreferrer" href="https://giganexustechnology.com/" target="_blank">Giga Nexus Technology LLP</a></strong></div>
      <div>© {date.getFullYear()} <strong><a rel="noreferrer" href="http://internationaljournalofresearch.co.in/" target="_blank">IJR</a></strong>. All rights reserved</div>
    </div>
  );
};

export default CopyrightFooter;
