import React from "react";
import cardStyles from "./Card.module.scss";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardWrapper = styled.div`
  & > *::before {
    background-image: url("${props => props.backgroundImage}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
const Card = ({
  data: { id, backgroundImage, author, authorImage, title, desc, type },
}) => {
  return (
    <CardWrapper backgroundImage={backgroundImage}>
      <div className={cardStyles.card}>
        <div className={cardStyles["card-content"]}>
          <div className={cardStyles["card-header"]}>
            <img src={authorImage} alt={author} />
          </div>
          <div className={cardStyles["card-body"]}>
            <span className='card__title'>{title}</span>
            <span className='card__desc'>{desc}</span>
          </div>
          <div className='card-footer'>
            <span className={cardStyles["card__type"]}>{type}</span>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
Card.propTypes = {
  data: PropTypes.object.isRequired,
};

Card.defaultProps = {
  data: {
    id: 0,
    backgroundImage: undefined,
    author: undefined,
    authorImage: undefined,
    title: undefined,
    desc: undefined,
    type: undefined,
  },
};

export default Card;
