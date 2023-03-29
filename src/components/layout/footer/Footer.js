const Footer = props => {
  return (
    <footer className='footer flex-col'>
      <section className='container'>
        <div className='flex-row justify-around'>
          <ul>
            <h4>Coursera</h4>
            <li>A propos</li>
            <li>Carrières</li>
            <li>Certificats</li>
            <li>Diplômes</li>
            <li>Devenir partenaire</li>
          </ul>
          <ul>
            <h4>Communauté</h4>
            <li>Forum</li>
            <li>Blog</li>
            <li>Etudiants</li>
            <li>Enseignants</li>
            <li>Développeurs</li>
            <li>Testeurs bêta</li>
          </ul>
          <ul>
            <h4>Plus</h4>
            <li>Contact</li>
          </ul>
        </div>
      </section>

      <section className='container'>
        <div className='footer__social-media-and-copyright flex-row justify-around'>
          <span className='footer__copyright'>
            &copy; 2022 Coursera Inc. Tous droits réservés.{" "}
          </span>
          <div className='footer__social-media'>
            <ul className='flex-row justify-end'>
              <li>
                <i className='fab fa-facebook'></i>
              </li>
              <li>
                <i className='fab fa-twitter'></i>
              </li>
              <li>
                <i className='fab fa-youtube'></i>
              </li>
              <li>
                <i className='fab fa-linkedin'></i>
              </li>
              <li>
                <i className='fab fa-instagram'></i>
              </li>
              <li>
                <i className='fab fa-github'></i>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
