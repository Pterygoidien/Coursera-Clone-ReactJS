import React from "react";
import Carousel from "../../components/utils/Carousel";

const HomeCourseList = () => {
  const cards = [
    {
      id: 1,
      backgroundImage:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/46/e8fe37da624f05844a8b5d1fe58a6e/FoM-Logo-1.jpg?auto=compress&amp;dpr=1&amp;w=268&amp;h=167&amp;fit=crop",
      author: "Rice University",
      authorImage:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/3a/043acda9fb458194d1cbcd38ca6d5c/Rice_Logo_280_Blue_Square.png?auto=compress&dpr=1&w=72&h=72",
      title: "Foundations of Mindfulness",
      desc: "Rice University",
      type: "cours",
    },
    {
      id: 2,
      backgroundImage:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/2c/fdebb0728711e8a431b1fb8caaf072/MOOC-Logo.fw.png?auto=compress&amp;dpr=1&amp;w=268&amp;h=167&amp;fit=crop&quot",
      author: "The University of Sidney",
      authorImage:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/b6/1c7980e65b11e585a5d1c2a17c7763/USY_Mono_Stacked_Logo_360x360.png?auto=compress&amp;dpr=1&amp;w=72&amp;h=72",
      title: "Innovation Through Design : Think, Make, Break, Repeat",
      desc: "The University of Sidney",
      type: "cours",
    },
    {
      id: 3,
      backgroundImage:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ab/1ac366de3a4aeabdd4e04f27d62973/Cloud-Image_Coursera.png?auto=compress&dpr=1&w=268&h=167&fit=crop",
      author: "LearnQuest",
      authorImage:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/91/3ae3bf6d924c9180182672d7302dab/LearnQuest-logo_1200x1200.png?auto=compress&dpr=1&w=72&h=72",
      title: "Cloud Computing Basics (Cloud101)",
      desc: "LearnQuest",
      type: "cours",
    },
    {
      id: 4,
      backgroundImage:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/4d/0953202afd11e9af73f117fc69a977/89066_iconImage_EducationCoursera2.jpg?auto=compress&dpr=1&w=268&h=167&fit=crop",
      author: "SAS",
      authorImage:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/5d/23e02413624467a7874b12a05a9257/square-sas-logo-midnight-coursera.png?auto=compress&dpr=1&w=72&h=72",
      title: "Statistics with SAS",
      desc: "SAS",
      type: "cours",
    },
    {
      id: 5,
      backgroundImage:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/96/8feec0c05011e5bb8d1741d4288bfa/brain_icon-square.jpg?auto=compress&dpr=1&w=268&h=167&fit=crop",
      author: "University of Houston",
      authorImage:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/29/8302b098b0435d8bff9a750f74e866/UH300x300.png?auto=compress&dpr=1&w=72&h=72",
      title: "Powerful Tools for Teaching and Learning: Digital Storytelling",
      desc: "SAS",
      type: "cours",
    },
    {
      id: 6,
      backgroundImage:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/7e/81cbf05a8311e692fbe7986a8dd1b4/twenty20_8356bd79-e053-4197-bb06-5d0340eafb44.jpg?auto=compress&dpr=1&w=268&h=167&fit=crop",
      author: "Case Western Reserve University",
      authorImage:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/a8/f082d763f49ef3a14862a5f01ae5bd/360x360_CWRU.logo.png?auto=compress&dpr=1&w=72&h=72",
      title: "Powerful Tools for Teaching and Learning: Digital Storytelling",
      desc: "Case Western Reserve University",
      type: "cours",
    },
    {
      id: 7,
      backgroundImage:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/50/ebebf0005c11e88cf645e55d5c5608/DD_logo_v1_2.png?auto=compress&dpr=1&w=268&h=167&fit=crop",
      author: "McMaster University",
      authorImage:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/cd/096990d60a11e3bd0bdd4ddcad074b/full_colour_tagline_reverse.png?auto=compress&dpr=1&w=72&h=72",
      title: "DNA Decoded",
      desc: "McMaster University",
      type: "cours",
    },
    {
      id: 8,
      backgroundImage:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/60/10888f5828401484a5dfc2e59c052e/computationalthinking.jpg?auto=compress&dpr=1&w=268&h=167&fit=crop",
      author: "University of Michigan",
      authorImage:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=compress&dpr=1&w=72&h=72",
      title: "Problem Solving Using Computational Thinking",
      desc: "University of Michigan",
      type: "cours",
    },
    {
      id: 9,
      backgroundImage:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ff/c2425dce1c49259904cb1974da2f42/new-ml-on-gcp-logo-1-.jpeg?auto=compress&dpr=1&w=268&h=167&fit=crop",
      author: "Google Cloud",
      authorImage:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4e/c2f4c0f4bb11e69a33576c875f4294/cloud-twitter-avatar.png?auto=compress&dpr=1&w=72&h=72",
      title: "MLOps (Machine Learning Operations) Fundamentals",
      desc: "Good Cloud",
      type: "cours",
    },
  ];
  return (
    <section className='courseList'>
      <div className='container'>
        <h3>Cours et Spécialisations</h3>
        <h2>Explorer nos cours les plus populaires</h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
};

export default HomeCourseList;
