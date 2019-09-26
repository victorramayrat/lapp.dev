import Header from '../c/header'
import Head from '../c/head'
import Footer from '../c/footer'
import { Pane, Button, Text, Heading, Paragraph, Link } from 'evergreen-ui'
import globalStyles from '../styles/global'

export default function Index() {
  return (
    <div>
      <Head
        title={'Lightning Apps Developer - 1 App per Quarter'}
        image={'/static/favicon.png'}
        description={'Lightning Apps Bitcoin Developer'}
        url={'https://lapp.dev'} />
      <Header />
      <style jsx global>
        {globalStyles}
      </style>
      <main id="content" role="main">
        <Pane display="flex" paddingTop={48} justifyContent="center">
          <Heading is="h1" size={900} color="orange">I'm launching 4 Bitcoin Projects in 12 Months</Heading>
        </Pane>
        <Paragraph size={500} maxWidth={640} style={{color: "#E4E4E4", margin:"32px auto"}}>
          Inspired by the work of <Link href="https://twitter.com/levelsio" target="_blank">Pieter Levels</Link> and <Link href="https://twitter.com/doweig" target="_blank">Guillaume Verbal</Link>, I am setting a goal for myself to build 4 Lightning Apps projects in 12 months. That would equate to 1 LApp per quarter.
        </Paragraph>
        <Paragraph size={500} maxWidth={640} style={{color: "#E4E4E4", margin:"32px auto"}}>
          I know it's not easy but I am hoping that I'll be more accountable if I share my journey towards learning blockchain concepts (Lightning in particular) and building applications on top of it.
        </Paragraph>
        <Paragraph size={500} maxWidth={640} style={{color: "#E4E4E4", margin:"32px auto"}}>
          Here's hoping for the best.<br /><br />
          Victor<br />
          9/25/2019
        </Paragraph>
      </main>
    <Footer />
    </div>
  );
}
