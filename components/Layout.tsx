import React, { ReactNode } from "react";

import { Footer } from "./Footer";
import Head from "next/head";
import Link from "next/link";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>STONKS</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </div>
);

export default Layout;
