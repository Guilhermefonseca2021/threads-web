import { Container } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Container maxWidth="620px">
        <Routes>
          <Route path="/" element={<UserPage />} />
          <Route path="/:username/:post/:id" element={<PostPage />} />
        </Routes>
      </Container>
    </>
  );
}
