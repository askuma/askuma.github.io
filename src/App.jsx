import { useState, useEffect } from 'react';
import Portfolio from './components/Portfolio';
import RecruiterResume from './components/RecruiterResume';

function App() {
  const [view, setView] = useState(() =>
    window.location.hash === '#recruiter' ? 'recruiter' : 'portfolio'
  );

  useEffect(() => {
    const sync = () =>
      setView(window.location.hash === '#recruiter' ? 'recruiter' : 'portfolio');
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  const goRecruiter = () => { window.location.hash = 'recruiter'; };
  const goPortfolio = () => { window.location.hash = ''; };

  return view === 'recruiter'
    ? <RecruiterResume onSwitch={goPortfolio} />
    : <Portfolio onSwitchToRecruiter={goRecruiter} />;
}

export default App;
