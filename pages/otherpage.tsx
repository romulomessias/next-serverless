import React from 'react'
import  {createUseStyles} from 'react-jss'
import { NextPage } from 'next';
import Link from 'next/link';

const useOtherStyles = createUseStyles({
root: {
    marginTop: 100,
    textAlign: 'center',
    color:'blue',
  },
  otherTitle: {
    fontSize: 28,
    lineHeight: 1.25,
  }
})

interface IOtherPageProps {
  userAgent?: string
}

const OtherPage: NextPage<IOtherPageProps> = (props) => {
  const classes = useOtherStyles();
  return (
    <main className={classes.root}>
      <h1 className={classes.otherTitle}>
        Other Page
      </h1>
      <Link href="/">
          <a>Home</a>
        </Link>
      <article>
        <div>{props.userAgent}</div>
      </article>
    </main>
  )
}

OtherPage.getInitialProps =  async ({req}) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default OtherPage;
