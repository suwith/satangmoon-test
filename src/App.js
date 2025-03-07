import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";  // RecoilRoot 추가
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import bottom from "./assets/bottom.svg";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <div className="w-full max-w-[428px] mx-auto min-h-screen bg-main bg-cover relative">
          {/* 아래에 고정된 이미지 추가 */}
          <img src={bottom} alt="bottom" className="absolute bottom-0 left-0 w-full" />

          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/:KakaoId" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </RecoilRoot>
  );
}

export default App;
