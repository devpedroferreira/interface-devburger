import PropTypes from 'prop-types';
import { ContainerButton } from './styles';

export function Button({ children, ...props }) {
  <ContainerButton>
    return <ContainerButton {...props}>{children}</ContainerButton>
  </ContainerButton>
}
    
Button.propTypes = {
  children: PropTypes.string,
};