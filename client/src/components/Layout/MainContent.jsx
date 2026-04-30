import React from 'react'
import Home from '../../pages/Home'
import { Route, Routes } from 'react-router-dom'
import EditorialBoard from '../../pages/EditorialBoard/EditorialBoard'
import Subscription from '../../pages/Subscription'
import Guidelines from '../../pages/Guidelines/Guidelines'
import GeneralInformation from '../../pages/GeneralInformation/GeneralInformation'
import CallForPapers from '../../pages/CallForPapers'
import JournalIssues from '../../pages/JournalIssues/JournalIssues'
import Indexing from '../../pages/Indexing'
import OnlineSubmission from '../../pages/OnlineSubmission'
import ContactUs from '../../pages/ContactUs/ContactUs'
import SpecialIssues from '../../pages/SpecialIssues'
import PublicationEthics from '../../pages/PublicationEthics'
import TopicsCovered from '../../pages/TopicsCovered'
import PeerReviewPolicy from '../../pages/PeerReviewPolicy'

const MainContent = ({style}) => {
  return (
    <div style={style}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="editorial-board" element={<EditorialBoard/>} />
        <Route path="subscription" element={<Subscription/>} />
        <Route path="guidelines" element={<Guidelines/>} />
        <Route path="general-information" element={<GeneralInformation/>} />
        <Route path="online-submission" element={<OnlineSubmission/>} />
        <Route path="call-for-papers" element={<CallForPapers/>} />
        <Route path="journal-issues" element={<JournalIssues/>} />
        <Route path="indexing" element={<Indexing/>} />
        <Route path="special-issues" element={<SpecialIssues/>} />
        <Route path="publication-ethics" element={<PublicationEthics/>} />
        <Route path="peer-review-process" element={<PeerReviewPolicy/>} />
        <Route path="topics-covered" element={<TopicsCovered/>} />
        <Route path="contact-us" element={<ContactUs/>} />
      </Routes>
    </div>
  )
}

export default MainContent
