import Head from 'next/head'

const Header = () => {
  return (
    <Head>
      <title>Martin Fimia - Software Developer</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/logos/mf_logo_no_bg.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon/favicon_32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon/favicon_16x8.png"
      />
      <link rel="manifest" href="/static/favicon/site.webmanifest" />
      <meta name="description" content="Elegant and powerful interfaces" />
    </Head>
  )
}

export default Header
