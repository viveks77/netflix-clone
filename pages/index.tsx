import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Featured from '../common/components/Featured/Featured';
import ShowBlock from '../common/components/ShowBlock/ShowBlock';
import { getGenres, getMoviesPopular, getTopRatedMovie, getTopRatedTv, getTrendingAll } from '../common/utils/api/api'
import { API } from '../common/utils/types/api';

interface HomeProps {
  popular : API.Show[];
  trending: API.Show[];
  topRated: API.Show[];
  topRatedMovies: API.Show[];
  genre: API.Genre[];
}

const Container = styled.div<{$isTop: boolean}>`
  margin-top: ${p => p.$isTop ? '-10rem': '5rem'};
`;

const Home: React.FC<HomeProps> = ({popular, trending, topRated, topRatedMovies, genre}) => {

  const [featured, setFeatured] = useState<API.Show>(Object);
  useEffect(() => {
    setFeatured(popular[Math.floor(Math.random() * popular.length)])
  }, [popular])


  return (
    <div >
      <Head>
        <title>Watch.io</title>
        <meta name="description" content="Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {featured && <Featured { ...featured}/>}
      <Container $isTop={true}>
        <ShowBlock shows={trending} title={"Trending Shows"} />
      </Container>
      <Container $isTop={false}>
        <ShowBlock shows={topRatedMovies} title={"Top Rated Movies"} />
      </Container>
      <Container $isTop={false}>
        <ShowBlock shows={topRated} title={"Top Rated TV Shows"} />
      </Container>
    </div>
  )
}

export default Home


export const getStaticProps: GetStaticProps = async (context) => {
  const popular =  await getMoviesPopular();
  const trending = await getTrendingAll();
  const topRated = await getTopRatedTv();
  const topRatedMovies = await getTopRatedMovie();
  const genre = await getGenres();
  return {
    props: {
      popular,
      trending,
      topRated,
      topRatedMovies,
      genre
    }
  }
}