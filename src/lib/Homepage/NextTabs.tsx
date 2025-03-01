'use client';

import { Carousel } from '@mantine/carousel';

import '@mantine/carousel/styles.css';

import { Image, Tabs } from '@mantine/core';
import { Movie } from '../../api-types/movie';
import classes from './NextTabs.module.css';

export const NextTabs = ({ allMovies }: { allMovies: Movie[] }) => {
  return (
    <Tabs defaultValue="byMovie" variant="none">
      <Tabs.List justify="center">
        <Tabs.Tab value="byMovie" className={classes.tab}>
          Scegli il film
        </Tabs.Tab>
        <Tabs.Tab value="byDay" className={classes.tab}>
          Scegli il giorno
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="byMovie">
        By Movie
        <Carousel
          withIndicators
          height={400}
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
        >
          {allMovies.map((movie, index) => {
            return (
              <Carousel.Slide key={index}>
                <Image src={movie.image_url} h="100%" alt={movie.title} fit="contain" />
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </Tabs.Panel>
      <Tabs.Panel value="byDay">
        By Day
        <Carousel
          withIndicators
          height={400}
          slideSize="33.333333%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
        >
          <Carousel.Slide>1</Carousel.Slide>
          <Carousel.Slide>2</Carousel.Slide>
          <Carousel.Slide>3</Carousel.Slide>
          {/* ...other slides */}
        </Carousel>
      </Tabs.Panel>
    </Tabs>
  );
};
