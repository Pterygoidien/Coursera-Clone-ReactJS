import axios from "axios";

import HomeShowcase from "./Showcase";
import HomePartners from "./Partners";
import HomeCourseList from "./CourseList";
import HomeExplore from "./ExploreCoursera";

import "../../scripts/scss/pages/home.scss";
import { useEffect } from "react";

const Home = () => {
  return (
    <main className='flex-col w-max-vw'>
      <HomeShowcase />
      <HomePartners />
      <HomeCourseList />
      <HomeExplore />
      <div
        className='container w-max-vw'
        style={{ backgroundColor: "black", color: "white" }}
      >
        Test
      </div>
    </main>
  );
};
export default Home;
