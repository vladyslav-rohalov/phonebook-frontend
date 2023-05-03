import { useAuth } from 'hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

export default function RestrictedRoute({
  component: Component,
  redirectTo = '/home',
}) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  // console.log(
  //   `restrictedRoute isLoggedIn ###${isLoggedIn}### redirect to Home`
  // );
  return isLoggedIn ? (
    <Navigate to={location.state?.from ?? redirectTo} />
  ) : (
    Component
  );
}