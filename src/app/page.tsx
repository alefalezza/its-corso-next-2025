import { Box, Center } from '@mantine/core';
import { Today } from '@/lib/Homepage/Today';
import { CustomTitle } from '../lib/CustomTitle';
import { Download } from '../lib/Homepage/Download';
import { News } from '../lib/Homepage/News';
import { NextTabs } from '../lib/Homepage/NextTabs';
import { Tariffe } from '../lib/Homepage/Tariffe';
import { getAllMovie, getTodayMovies } from '../services/movie';

export default async function HomePage() {
  const todayMovies = await getTodayMovies();

  const allMoviesInDatabase = await getAllMovie();
  console.log(allMoviesInDatabase);

  return (
    <Box>
      <Today movies={todayMovies} />
      <Center>
        <CustomTitle>Tutti i film in programmazione</CustomTitle>
      </Center>
      <Box>
        <NextTabs allMovies={allMoviesInDatabase} />
      </Box>
      <Tariffe />
      <Download />
      <News />
    </Box>
  );
}
