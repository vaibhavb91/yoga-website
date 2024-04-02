import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarSection from "./components/navbar/navBarSection";
import YogaSection from "./components/yogaSection/yogaSection";
import Classes from "./components/classes/classes";
import Teacher from "./components/teacher/teacher";
import Footer from "./components/footer/footer";
import "./App.css";
import Programs from "./components/programs/programs";
import Membership from "./components/membership/membership";
import Contact from "./components/contact/contact";
import Testimonials from "./components/testimonials/testimonials";
const App = () => {
  return (
    <div>
      <NavBarSection />
      <YogaSection />
      <Classes />
      <Programs />
      <Teacher />
      <Membership />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
