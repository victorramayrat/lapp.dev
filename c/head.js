import Head from 'next/head'
import globalStyles from '../styles/global.js'

export default class extends React.Component {
  render() {
    return [
      <Head key={1}>
        <title>{ this.props.title }</title>
        <link rel="shortcut icon" href="/static/favicon.png"></link>
        <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet" />
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
         {/* Open Graph */}
        <meta property="og:title" content={ this.props.title} />
        <meta property="og:image" content={ this.props.image } />
        <meta property="og:description" content={ this.props.description } />
        <meta property="og:url" content={ this.props.url } />
        <style jsx global>
        {globalStyles}
      </style>
      </Head>
    ]
  }
}