import axios from "axios";
import React, { useEffect, useState } from "react";

import styles from "./Courses.module.css";

const Courses = () => {
  const [courseList, setCourseList] = useState(null);
  const fetchCourseList = async () => {
    try {
      const res = await axios.get("/api/courses/");
      setCourseList(res.data.data.data);
    } catch (error) {
      console.error("error");
    }
  };

  useEffect(() => {
    fetchCourseList();
  }, []);

  return (
    <main>
      <div className='container'>
        Parcourir {">"} Gratuits
        <h2>Cours disponibles</h2>
        <p>Sujets liés : cours Gratuit</p>
        <div className='filter-search'>
          <label>Filtrer par</label>
          <form className='flex-row justify-start'>
            <select name='lang'>
              <option value=''>Langue</option>
              <option value='en'>Anglais</option>
              <option value='fr'>Français</option>
              <option value='nl'>Néerlandais</option>
              <option value='de'>Allemand</option>
              <option value='es'>Espagnol</option>
              <option value='ru'>Russe</option>
              <option value='it'>Italien</option>
            </select>
            <select name='level'>
              <option value=''>Niveau</option>
              <option value='beginner'>Débutant</option>
              <option value='mixte'>Mixte</option>
              <option value='intermediary'>Intermédiaire</option>
              <option value='hard'>Avancées</option>
            </select>
            <select name='avgHours'>
              <option value=''>Durée</option>
              <option value='trimester'>1 à 3 mois</option>
              <option value='month'>1 à 4 semaines</option>
              <option value='semester'>Plus de 3 mois</option>
              <option value='hours'>Moins de 2 heures</option>
            </select>
            <select name='subject'>
              <option value=''>Sujet</option>
              <option value='business'>Business</option>
              <option value='social-sciences'>Sciences sociales</option>
              <option value='health'>Health</option>
              <option value='physical-science+engineering'>
                Physical Science and Engineering
              </option>
              <option value='arts-and-humanities'>Arts and Humanities</option>
              <option value='computer-sciences'>Computer Sciences</option>
              <option value='data-sciences'>Data Sciences</option>
              <option value='personal-development'>Personal Development</option>
              <option value='math+logic'>Math and Logic</option>
            </select>
            <select name='partners'>
              <option value=''>Partenaire</option>
              <option value='uliege_university'>Université de Liège</option>
              <option value='ulb_university'>
                Université Libre de Bruxelles
              </option>
              <option value='ucl_university'>
                Université Catholique de Louvain
              </option>
              <option value='umons_university'>Université de Mons</option>
            </select>
          </form>
        </div>
        <div className='course-results'>
          {courseList &&
            courseList.map(course => {
              return (
                <div className={styles["course-item"]} key={course._id}>
                  <img
                    src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera/topics/ml/large-icon.png?auto=format%2Ccompress&amp;dpr=1&amp;w=150&amp;h=150&amp;fit=fill&amp;bg=FFF&amp;q=25'
                    className='product-photo'
                    alt='Machine Learning by Stanford University'
                    width='150'
                    height='150'
                  />
                  <div className='item-content'>
                    <h3>{course.courseTitle}</h3>
                    <p>{course.courseDesc}</p>
                    <p>{course.enrollments} étudiants</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
};

export default Courses;
