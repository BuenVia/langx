import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import TestsTemplate from "./pages/TestsTemplate";
import NoPage from "./pages/NoPage";
import Dashboard from "./pages/Dashboard";
import FlashCard from "./pages/FlashCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="flash" element={<FlashCard />} />
          <Route path="french" element={<Dashboard />} />
          <Route path="blogs/:id" element={<Blogs />} />
          <Route path="questions/:id" element={<TestsTemplate />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
