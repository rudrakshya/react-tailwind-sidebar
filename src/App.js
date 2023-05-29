import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./pages/AllApps";
import Authentication from "./pages/Authentication";
import Storage from "./pages/Storage";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import Build from "./pages/Build";

function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<AllApps />} exact />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/analytics/:aID" element={<Analytics />} />
          <Route path="/build/:aID" element={<Build />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
