import {
  Center,
  Container,
  Grid,
  GridCol,
  Image,
  List,
  ListItem,
  Rating,
  Title,
} from '@mantine/core';
import { findMovieById } from '@/services/movie';

export default async function SchedaFilm({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id as unknown as number;
  console.log(id);
  const movie = await findMovieById(id);
  return (
    <Container style={{ padding: '50px 0', color: 'white' }}>
      {' '}
      <Grid gutter="xl">
        <GridCol span={4}>
          <Image src={movie.image_url} />
        </GridCol>
        <GridCol span={6}>
          <Title>{movie.title}</Title>
          <Rating value={movie.rating || 0 / 2} readOnly></Rating>
          <List>
            <ListItem>Genere:{movie.genre}</ListItem>
            <ListItem>Regista:{movie.director}</ListItem>
            <ListItem>Anno:{movie.year}</ListItem>
            <ListItem>Durata:{movie.duration}</ListItem>
            <ListItem>Lingua:{movie.language}</ListItem>
            <ListItem>Pegi:{movie.restriction}</ListItem>
          </List>
        </GridCol>
      </Grid>{' '}
    </Container>
  );
}
