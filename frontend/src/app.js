import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Crops from './components/Crops/CropTracker';
import DiseaseDetection from './components/DiseaseDetection/DiseaseAI';
import Community from './components/Community/CommunityFeed';
import Weather from './components/Weather/WeatherWidget';
import Gallery from './components/Gallery/Gallery';
import ProfileSettings from './components/Profile/Settings';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/crops" component={Crops} />
        <Route path="/disease-detection" component={DiseaseDetection} />
        <Route path="/community" component={Community} />
        <Route path="/weather" component={Weather} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/profile/settings" component={ProfileSettings} />
      </Switch>
    </Router>
  );
};

export default App;
