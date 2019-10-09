import React from 'react'
import  {createUseStyles} from 'react-jss'
import { NextPage } from 'next';
import Link from 'next/link';

const useStyles = createUseStyles({
  container: {
    marginTop: 100,
    textAlign: 'center',
    color:'red',
  },
  header: {
    fontSize: 24,
    lineHeight: 1.25,
  }
})

interface IIndexProps {
  userAgent?: string
}

const Index: NextPage<IIndexProps> = (props) => {
  const classes = useStyles();
  return (
    <main className={classes.container}>
      <h1 className={classes.header}>
        Next Serverless
      </h1>
      <Link href="/otherpage">
          <a>Other Page</a>
        </Link>
      <article>
        <div>{props.userAgent}</div>
      </article>
    </main>
  )
}

Index.getInitialProps =  async ({req}) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
  return { userAgent }
}

export default Index;
