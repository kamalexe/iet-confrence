import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import SpeakersScreen from './screens/SpeakersScreen';
import VenueScreen from './screens/VenueScreen';
import CommitteesScreen from './screens/CommitteesScreen';
import ProgramScreen from './screens/ProgramScreen';
import TravelScreen from './screens/TravelScreen';
import CallForPapersScreen from './screens/CallForPapersScreen';
import SubmissionInstructionsScreen from './screens/SubmissionInstructionsScreen';
import PublicationGuidelinesScreen from './screens/PublicationGuidelinesScreen';
import RegistrationGuidelinesScreen from './screens/RegistrationGuidelinesScreen';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/schedule" element={<ScheduleScreen />} />
        <Route path="/speakers" element={<SpeakersScreen />} />
        <Route path="/venue" element={<VenueScreen />} />
        <Route path="/committees" element={<CommitteesScreen />} />
        <Route path="/program" element={<ProgramScreen />} />
        <Route path="/travel" element={<TravelScreen />} />
        <Route path="/call-for-papers" element={<CallForPapersScreen />} />
        <Route path="/submission-instructions" element={<SubmissionInstructionsScreen />} />
        <Route path="/publication-guidelines" element={<PublicationGuidelinesScreen />} />
        <Route path="/registration" element={<RegistrationGuidelinesScreen />} />


      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
