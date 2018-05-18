import { PublicPages } from './PublicPages';
import { ProtectedPages } from './ProtectedPages';

export const Pages = props => (props.user ?
  (
    <ProtectedPages />
  ) :
  (
    <PublicPages />
  ));

