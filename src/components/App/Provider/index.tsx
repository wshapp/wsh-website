import React from "react";
import { useRouter } from "next/router";

import { AuthContext } from "@context/Auth";
import * as ROUTES from "@constants/routes";
import Loading from "@components/Main/Loading";

interface PrivateProviderProps {
  children: React.ReactNode;
  noRedirect?: boolean;
}

const PrivateProvider: React.FC<PrivateProviderProps> = ({
  children,
  noRedirect = false,
}: PrivateProviderProps) => {
  const { user } = React.useContext(AuthContext);
  const router = useRouter();

  console.log(user);

  React.useEffect(() => {
    if (!user && !noRedirect) router.push(ROUTES.LANDING);
  }, [noRedirect, user, router]);

  return user ? <>{children}</> : <Loading />;
};

export default PrivateProvider;
