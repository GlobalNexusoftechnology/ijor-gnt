import React from "react";
import Issues from "./Issues";
import Abstract from "./Abstract";

import _JOURNAL_ISSUES from '../../data/journalIssues.js'
import journalAbstract from '../../data/journalAbstract.json'


const JournalIssues = () => {
  return (
    <>
      <Issues data={_JOURNAL_ISSUES} />
      <Abstract data={journalAbstract} />
    </>
  );
};

export default JournalIssues;
