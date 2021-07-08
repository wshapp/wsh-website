import React from "react";

import { AuthContext } from "@context/Auth";
import * as ROUTES from "@constants/routes";
import Loading from "@components/Main/Loading";
import { useRouter } from "next/router";

interface PublicProviderProps {
  children: React.ReactNode;
  noRedirect?: boolean;
}

const PublicProvider: React.FC<PublicProviderProps> = ({
  children,
  noRedirect = false,
}: PublicProviderProps) => {
  const { user } = React.useContext(AuthContext);
  const router = useRouter();

  React.useEffect(() => {
    if (user && !noRedirect) router.push(ROUTES.HOUSE);
  }, [router, noRedirect, user]);

  return user ? <Loading /> : <>{children}</>;
};

export default PublicProvider;
