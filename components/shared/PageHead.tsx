import Head from "next/head";
export const PageHead = (props: { pageTitle: string }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta name="description" content="Created by a1k3" />
      <title>{props.pageTitle}</title>
      <link rel="icon" href="/images/discord-transparent.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Poppins&family=Sigmar+One&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
  );
};
