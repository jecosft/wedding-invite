import React from 'react';
import Header from './components/Header';
import InviteText from './components/InviteText';
import Details from './components/Details';
import RSVPForm from './components/RSVPForm';
import AddToCalendar from './components/AddToCalendar';
import Footer from './components/Footer';
import ScheduleAndMap from './components/ScheduleAndMap';
const flowerBg = process.env.PUBLIC_URL +'/paper_texture1.png';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-pink-50" style={{backgroundImage: `url(${flowerBg})`}}>
      <Header />
      <main className="flex-1 flex flex-col items-center px-2">
        <InviteText />
        <Details />
        <RSVPForm />
        <ScheduleAndMap />
        <AddToCalendar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
