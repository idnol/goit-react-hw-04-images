import { LoadButtonStyled } from './LoadButton.styled';

export const LoadButton = ({click}) => {
  return <LoadButtonStyled type="button" onClick={click}>Load More</LoadButtonStyled>
}
