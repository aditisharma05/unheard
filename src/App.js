import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ChatInterface from "./pages/chat-ngo";
import ChatInterface1 from "./pages/chat-doc";
import VIDEOCALL from "./pages/VIDEOCALL";
import VIDEOCALL1 from "./pages/VIDEOCALL1";
import VIDEOCALL2 from "./pages/VIDEOCALL2";
import VIDEOCALL3 from "./pages/VIDEOCALL3";
import VIDEOCALL4 from "./pages/VIDEOCALL4";
import VIDEOCALL5 from "./pages/VIDEOCALL5";
import VIDEOCALL6 from "./pages/VIDEOCALL6";
import VIDEOCALL7 from "./pages/VIDEOCALL7";
import VIDEOCALL8 from "./pages/VIDEOCALL8";
import NgoSearch from "./pages/NgoSearch";
import NgoSearch1 from "./pages/NgoSearch1";
import NgoSearchSpare from "./pages/NgoSearchSpare";
import NgoSearchSpare1 from "./pages/NgoSearchSpare1";
import ABOUTUS from "./pages/ABOUTUS";
import NgoDetails from "./pages/NgoDetails";
import DoctorsInfo from "./pages/DoctorsInfo";
import DoctorsSearchDetails from "./pages/DoctorsSearchDetails";
import DoctorsSearchDetails1 from "./pages/DoctorsSearchDetails1";
import FindYourDoctor from "./pages/FindYourDoctor";
import FindYourDoctor1 from "./pages/FindYourDoctor1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/chat-interface":
        title = "";
        metaDescription = "";
        break;
      case "/chat-interface1":
        title = "";
        metaDescription = "";
        break;
      case "/video-call8":
        title = "";
        metaDescription = "";
        break;
      case "/video-call4":
        title = "";
        metaDescription = "";
        break;
      case "/video-call7":
        title = "";
        metaDescription = "";
        break;
      case "/video-call1":
        title = "";
        metaDescription = "";
        break;
      case "/video-call":
        title = "";
        metaDescription = "";
        break;
      case "/video-call6":
        title = "";
        metaDescription = "";
        break;
      case "/video-call5":
        title = "";
        metaDescription = "";
        break;
      case "/video-call3":
        title = "";
        metaDescription = "";
        break;
      case "/video-call2":
        title = "";
        metaDescription = "";
        break;
      case "/ngo-search1":
        title = "";
        metaDescription = "";
        break;
      case "/ngo-search":
        title = "";
        metaDescription = "";
        break;
      case "/ngo-search-spare1":
        title = "";
        metaDescription = "";
        break;
      case "/ngo-search-spare":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/ngo-details":
        title = "";
        metaDescription = "";
        break;
      case "/doctors-info":
        title = "";
        metaDescription = "";
        break;
      case "/doctors-search-details1":
        title = "";
        metaDescription = "";
        break;
      case "/doctors-search-details":
        title = "";
        metaDescription = "";
        break;
      case "/find-your-doctor1":
        title = "";
        metaDescription = "";
        break;
      case "/find-your-doctor":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/chat-interface" element={<ChatInterface />} />
      <Route path="/chat-interface1" element={<ChatInterface1 />} />
      <Route path="/video-call8" element={<VIDEOCALL />} />
      <Route path="/video-call4" element={<VIDEOCALL1 />} />
      <Route path="/video-call7" element={<VIDEOCALL2 />} />
      <Route path="/video-call1" element={<VIDEOCALL3 />} />
      <Route path="/video-call" element={<VIDEOCALL4 />} />
      <Route path="/video-call6" element={<VIDEOCALL5 />} />
      <Route path="/video-call5" element={<VIDEOCALL6 />} />
      <Route path="/video-call3" element={<VIDEOCALL7 />} />
      <Route path="/video-call2" element={<VIDEOCALL8 />} />
      <Route path="/ngo-search1" element={<NgoSearch />} />
      <Route path="/ngo-search" element={<NgoSearch1 />} />
      <Route path="/ngo-search-spare1" element={<NgoSearchSpare />} />
      <Route path="/ngo-search-spare" element={<NgoSearchSpare1 />} />
      <Route path="/about-us" element={<ABOUTUS />} />
      <Route path="/ngo-details" element={<NgoDetails />} />
      <Route path="/doctors-info" element={<DoctorsInfo />} />
      <Route
        path="/doctors-search-details1"
        element={<DoctorsSearchDetails />}
      />
      <Route
        path="/doctors-search-details"
        element={<DoctorsSearchDetails1 />}
      />
      <Route path="/find-your-doctor1" element={<FindYourDoctor />} />
      <Route path="/find-your-doctor" element={<FindYourDoctor1 />} />
    </Routes>
  );
}
export default App;
