import PropTypes from 'prop-types';
import {
  Card,
  FirstLine,
  SecondLine,
  ThirdLine,
  Badge,
  Circle,
  Recommended,
  AddButton,
  Arrow,
  Title,
  Additionally,
  Value,
} from './ProductsItem.styled';
import Icons from './../../../images/sprite.svg';

const groupBlood = '2';

const ProductsItem = ({ info }) => {
  const isRec = info.groupBloodNotAllowed[groupBlood];

  console.log(isRec);

  return (
    <Card>
      <FirstLine>
        <Badge>DIET</Badge>

        <Circle
          style={{
            backgroundColor: `${
              info.groupBloodNotAllowed[groupBlood] ? '#E9101D' : '#419B09'
            }`,
          }}
        ></Circle>
        <Recommended>
          {info.groupBloodNotAllowed[groupBlood]
            ? 'Not recommended'
            : 'Recommended'}
        </Recommended>

        <AddButton type="button">
          Add
          <Arrow width={16} height={16}>
            <use href={Icons + '#icon-arrow-right'}></use>
          </Arrow>
        </AddButton>
      </FirstLine>

      <SecondLine>
        <svg width={24} height={24} fill="orange">
          <use href={Icons + '#icon-runningOnCircle'}></use>
        </svg>
        <Title>
          {info.title.length > 25
            ? `${info.title.slice(0, 25)}...`
            : info.title}
        </Title>
      </SecondLine>
      <ThirdLine>
        <Additionally>
          Calories: <Value>{info.calories}</Value>
        </Additionally>
        <Additionally>
          Category:{' '}
          <Value>
            {info.category.length > 10
              ? `${info.category.slice(0, 10)}...`
              : info.category}
          </Value>
        </Additionally>
        <Additionally>
          Weight: <Value>{info.weight}</Value>
        </Additionally>
      </ThirdLine>
    </Card>
  );
};

export default ProductsItem;

ProductsItem.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    groupBloodNotAllowed: PropTypes.shape({}),
  }).isRequired,
};