import { useNavigate } from "react-router-dom";

import Button from "../../components/utils/Button";
const HomeShowcase = () => {
  const navigate = useNavigate();
  return (
    <section className='showcase'>
      <div className='container flex-row flex-nowrap'>
        <div className='showcase__text flex-col flex-start'>
          <h1>Apprenez sans limites</h1>
          <p>
            Développez de nouvelles compétences pour ce sentiment "c'est mon
            année" avec des cours, des certificats et des diplômes d'universités
            et d'entreprises de classe mondiale
          </p>
          <div className='flex-row justify-around gap-11px align-stretch'>
            <Button
              className='showcase__subscribe btn--primary btn--lg flex-grow'
              onClick={() => navigate({ search: "?authMode=register" })}
            >
              <span>Inscrivez-vous gratuitement</span>
            </Button>

            <Button className='btn--outline-primary btn--lg flex-grow'>
              Explorer tous les cours en ligne
            </Button>
          </div>
        </div>
        <div className='showcase__image collapse-md'>
          <img
            src='https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/6JVJEaAT8FWwiBfVl1vECY/f5c7eb90291561ae112d6c302c8fd16c/NYCampaign_HeaderImage_Paulina_918x992.png?auto=format%2Ccompress&dpr=2&w=459&h=497&q=40'
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default HomeShowcase;
