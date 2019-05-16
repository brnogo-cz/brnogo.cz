import React from 'react'

import Layout from '../components/layout'
import Photogallery from '../components/photogallery'

export default () => (
  <Layout>
      <h1>Fotky</h1>
      <Photogallery photos={photos} />
  </Layout>
)

const photos = [
    {
      src: `${__dirname}photos/Go-01_78932.jpg`,
      width: 310,
      height: 414,
    },
    {
      src: `${__dirname}photos/Go-02_78954.jpg`,
      width: 310,
      height: 267,
    },
    {
      src: `${__dirname}photos/Go-03_78975.jpg`,
      width: 310,
      height: 405,
    },
    {
      src: `${__dirname}photos/Go-04_78996.jpg`,
      width: 310,
      height: 211,
    },
    {
      src: `${__dirname}photos/Go-05_79024.jpg`,
      width: 310,
      height: 414,
    },
    {
      src: `${__dirname}photos/Go-06_79074.jpg`,
      width: 310,
      height: 247,
    },
    {
      src: `${__dirname}photos/Go-09_79137.jpg`,
      width: 310,
      height: 240,
    },
    {
      src: `${__dirname}photos/Go-11_79165.jpg`,
      width: 310,
      height: 207,
    },
    {
      src: `${__dirname}photos/Go-12_79187.jpg`,
      width: 310,
      height: 232,
    },
    {
      src: `${__dirname}photos/Go-13_79196.jpg`,
      width: 310,
      height: 232,
    },
    {
      src: `${__dirname}photos/Go-14_79209.jpg`,
      width: 310,
      height: 232,
    },
    {
      src: `${__dirname}photos/Go-15_79220.jpg`,
      width: 310,
      height: 170,
    },
]