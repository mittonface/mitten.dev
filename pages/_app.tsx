import "../styles/globals.css";

import { UserContext, UserProvider } from "../components/user";

import Amplify from "aws-amplify";
import React from "react";

const REALM_NAME_KEY = "custom:realmName";

Amplify.configure({
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_hQV2dRQX1",
    userPoolWebClientId: "6af7cqegskt5rhoc4ebce17hre",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Main />
    </UserProvider>
  );
}

export const AuthenticatedUserIndex = ({ subdomain }) => {};

const Main = () => {
  const { user } = React.useContext(UserContext);
  const [subdomain, setSubdomain] = React.useState("");

  React.useEffect(() => {
    const host = window.location.host.split(".");

    // if the length of `host` is 1, this probably means we're on localhost (no . in hostname)
    // if the length of `host` is 2, we're probably not on a subdomain (only one . in hostname)
    // if the length of `host` is three, the first item in the array is the subdomain
    if (host.length === 2) {
      setSubdomain(host[0]);
    }

    if (user && subdomain === "") {
      user.getUserAttributes((err, atts) => {
        if (err) {
          throw err;
        }
        const realmNameAttribute = atts.find(
          (attribute) => attribute.getName() === REALM_NAME_KEY
        );

        //@ts-ignore
        window.location = `https://${realmNameAttribute.getValue()}.mitten.dev/`;
      });
    }
  }, []);

  if (user) {
    if (subdomain === "") {
      return <p> ho</p>;
    }
  }

  if (!user) {
    if (subdomain === "") {
      return <p>Where do we take this unauthenticated user?</p>;
    } else {
      return <p>We know where to take this unauthenticated user</p>;
    }
  }

  return <p>Hi</p>;
};

export default MyApp;
