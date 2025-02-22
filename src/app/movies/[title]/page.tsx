import { Box } from '@mantine/core';

export default async function SchedaFilm({ params }: { params: Promise<{ title: string }> }) {
  const slug = (await params).title;
  const scheda = await fetch(`http://localhost:3000/api/scheda-film/${slug}`);
  const film = await scheda.json();

  // pseudo codice
  // const film = await SQL('SELECT * FROM film WHERE slug = ?', slug);

  // const film = await mongoose.get('film', { slug });

  // const film = JSON.parse(readFile(`../../../data/film/${slug}.json`));

  return (
    <Box style={{ color: 'white' }}>
      <h1>{film.titolo}</h1>
      <p>{slug}</p>
      <ul>
        <li>Regista: {film.regista}</li>
        <li>Anno: {film.anno}</li>
        <li>Genere: {film.genere}</li>
        <li>Durata: {film.durata}</li>
      </ul>

      <p>{film.trama}</p>
    </Box>
  );
}
