import { Link } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: ReactNode;
}
export const NavLink = ({ to, children }: NavLinkProps) => (
  <Link
    as={RouterLink}
    px={2}
    py={1}
    rounded="md"
    color="olive.200"
    _hover={{
      textDecoration: 'none',
      color: 'olive.500',
    }}
    to={to}
  >
    {children}
  </Link>
);
