import React from "react";

import { AuthContext } from "@context/Auth";
import * as ROUTES from "@constants/routes";
import Loading from "./Loading";
import { useRouter } from "next/router";

interface WildProviderProps {
  children: React.ReactNode;
  noRedirect?: boolean;
}

const WildProvider: React.FC<WildProviderProps> = ({
  children,
  noRedirect = false,
}: WildProviderProps) => {
  const { user } = React.useContext(AuthContext);
  const router = useRouter();

  React.useEffect(() => {
    if (user && !noRedirect) router.push(ROUTES.HOUSE);
  }, []);

  return user ? <Loading /> : <>{children}</>;
};

export default WildProvider;
