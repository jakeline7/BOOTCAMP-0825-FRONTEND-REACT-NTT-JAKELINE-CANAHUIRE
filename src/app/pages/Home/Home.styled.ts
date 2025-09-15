import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  // align-items: flex-start;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h2`
   
  color: #424242;
  font-size: 30px;
  align-self: flex-start;
`;

const SearchInput = styled.input`
  padding: 10px 20px;
  font-size: 18px;
  width: 500px;
  height:50px;
  border-radius: 50px;
  border: 2px solid #ccc;
  align-self: flex-start;
  

  &:focus {
    outline: none;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  row-gap: 30px;
  column-gap: 20px;
`;

const LoadingText = styled.div`
   
  color: #414141;
  font-size: 20px;
`;

const HomeStyled = {
  Container,
  Title,
  SearchInput,
  ProductsContainer,
  LoadingText,
};

export default HomeStyled;
