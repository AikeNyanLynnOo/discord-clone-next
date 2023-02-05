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
    </Head>
  );
};
