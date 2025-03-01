'use client';

import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Box, Button, Flex, Image, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './Today.module.css';

import '@mantine/carousel/styles.css';

import { Movie } from '@/api-types/movie';

function Card({ movie }: { movie: Movie }) {
  return (
    <Box p="xl" className={classes.card}>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
          backgroundImage: `url(${movie.image_url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px)',
          zIndex: 1,
        }}
      />
      <Flex
        align="center"
        justify="space-around"
        w="100%"
        h="100%"
        p="xl"
        gap="xl"
        style={{ position: 'relative', zIndex: 2 }}
      >
        <Stack gap="xs" align="start" h="100%">
          <Text className={classes.category} size="xs">
            {movie.genre}
          </Text>
          <Title order={3} className={classes.title}>
            {movie.title}
          </Title>

          <Button variant="white" color="dark">
            Acquista il biglietto
          </Button>
          <Button className={classes.btnScheda} color="dark">
            Vai alla scheda
          </Button>
        </Stack>
        <Image src={movie.image_url} h="100%" alt={movie.title} />
      </Flex>
    </Box>
  );
}

export const data: Array<Movie> = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    language: 'English',
    director: 'Frank Darabont',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    description: 'Two imprisoned',
    year: 1994,
    image_url: '/film/5f3ba8be-4748-451e-a694-b8156e2b529c-locandina-e-la-festa-continua.jpg',
    duration: 142,
  },
  {
    id: 2,
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    language: 'English',
    director: 'Frank Darabont',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    description: 'Two imprisoned',
    year: 1994,
    image_url: '/film/1131w-nduFAHrWNmU.webp',
    duration: 142,
  },
  {
    id: 3,
    title: 'Brutalist',
    genre: 'Drama',
    language: 'English',
    director: 'Frank Darabont',
    cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    description: 'Two imprisoned',
    year: 1994,
    image_url: '/film/65994.jpg',
    duration: 142,
  },
];

export const Today = ({ movies }: { movies: Array<Movie> }) => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = movies.map((item) => (
    <CarouselSlide key={item.id}>
      <Card movie={item} />
    </CarouselSlide>
  ));

  return (
    <Carousel
      //   slideSize={{ base: '100%' }}
      //   slideGap={{ base: 2, sm: 'xl' }}
      //   align="start"
      slidesToScroll={1}
      withIndicators
      withControls
      classNames={classes}
    >
      {slides}
    </Carousel>
  );
};
