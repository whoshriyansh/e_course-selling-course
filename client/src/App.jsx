import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import StudentSignin from "./pages/StudentSignin";
import CourseDetail from "./pages/CourseDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Route>
        <Route path="/student/signin" element={<StudentSignin />} />
      </Routes>
    </Router>
  );
}

export default App;
