import styled from 'styled-components';
import products1x from './../../images/products-desktop-1x.jpg';
import products2x from './../../images/products-desktop-2x.jpg';

export const Container = styled.div`
  @media screen and (min-width: 375px) {
    padding-top: 40px;
    padding-bottom: 80px;
  }

  @media screen and (min-width: 768px) {
    padding-top: 52px;
    padding-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 68px;

    background-image: linear-gradient(89deg, #040404 0%, rgba(4, 4, 4, 0) 100%),
      url(${products1x});
    background-repeat: no-repeat;
    background-position: 100% 0;
    padding-top: 68px;
    position: relative;
    min-height: 681px;
    margin-right: -9vw;

    @media (min-device-pixel-ratio: 2),
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${products2x});
    }
  }
`;
export const Title = styled.h2`
  @media screen and (min-width: 375px) {
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 116.667%;

    color: var(--primary-text-color);
    margin-bottom: 40px;
  }

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 137.5%;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 0;
    align-items: center;
  }
`;
export const ContainerForm = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
  }
`;
