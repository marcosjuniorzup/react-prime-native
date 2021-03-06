import { View } from 'react-native';
import styled from 'styled-components';

export const LoadingContainer = styled(View)`
  justify-content: center;
  align-items: center;
  flex: 1;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.prime};
`;
