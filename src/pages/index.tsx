import React from 'react'
import { NextPage } from 'next'
import { HomeTemplate } from '@src/components/templates'

const Home: NextPage = () => {
  const { APP_NAME } = process.env

  return <HomeTemplate />
}

export default Home
