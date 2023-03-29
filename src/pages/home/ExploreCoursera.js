import React from "react";
import styled from "styled-components";

const CardStyles = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: pointer;

  .item-image {
    width: 80px;
    height: 80px;
    background-color: purple;
    background-image: url("${props => props.backgroundImage}");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 3px 0 0 3px;
  }

  .item-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0.7rem;
  }
`;
const CategoryStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
`;
const CardItem = ({ category, desc, img }) => {
  return (
    <CardStyles className='explore-categories__item' backgroundImage={img}>
      <div className='item-image' />
      <div className='item-content'>
        <span className='item-category'>{category}</span>
        <span className='item-desc'>{desc}</span>
      </div>
    </CardStyles>
  );
};
CardItem.defaultProps = {
  category: "John Doe",
  desc: "Jane Doe",
  img: " https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/browse/domains/data_science.png?auto=format%2Ccompress&dpr=2&fit=crop&h=100",
};

const ExploreCoursera = () => {
  const cards = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];

  return (
    <section className='explore'>
      <div className='container'>
        <h2>Explorer Coursera</h2>
        <CategoryStyles className='explore-categories'>
          {cards.map(card => (
            <CardItem key={card.id} />
          ))}
        </CategoryStyles>
      </div>
    </section>
  );
};

export default ExploreCoursera;
