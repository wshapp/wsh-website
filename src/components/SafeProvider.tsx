import React from "react";
import { useRouter } from "next/router";

import { AuthContext } from "@context/Auth";
import * as ROUTES from "@constants/routes";
import Loading from "@components/Loading";

interface SafeProviderProps {
  children: React.ReactNode;
  noRedirect?: boolean;
}

const SafeProvider: React.FC<SafeProviderProps> = ({
  children,
  noRedirect = false,
}: SafeProviderProps) => {
  const { user } = React.useContext(AuthContext);
  const router = useRouter();

  React.useEffect(() => {
    if (!user && !noRedirect) router.push(ROUTES.LANDING);
  }, [noRedirect, user, router]);

  return user ? <>{children}</> : <Loading />;
};

export default SafeProvider;
