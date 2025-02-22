const data = [
  {
    slug: 'il-signore-degli-anelli',
    titolo: 'Il Signore degli Anelli',
    regista: 'Peter Jackson',
    anno: 2001,
    genere: 'Fantasy',
    durata: '178 minuti',
    trama:
      "Un giovane hobbit di nome Frodo Baggins eredita un anello. Un anello che ha il potere di controllare il mondo. Frodo dovrà partire per un viaggio per distruggere l'anello e sconfiggere Sauron, il signore oscuro.",
  },
  {
    slug: 'star-wars',
    titolo: 'Star Wars',
    regista: 'George Lucas',
    anno: 1977,
    genere: 'Fantascienza',
    durata: '121 minuti',
    trama:
      'In una galassia lontana lontana, un giovane contadino di nome Luke Skywalker scopre di essere l’unico in grado di sconfiggere l’Impero e il malvagio Darth Vader.',
  },
  {
    slug: 'matrix',
    titolo: 'Matrix',
    regista: 'Lana e Lilly Wachowski',
    anno: 1999,
    genere: 'Fantascienza',
    durata: '136 minuti',
    trama:
      'Un giovane hacker di nome Neo scopre che il mondo in cui vive è una simulazione creata dalle macchine. Neo dovrà liberare l’umanità dalla schiavitù delle      macchine e sconfiggere l’agente Smith.',
  },
];

export async function GET(request, { params }) {
  const slug = await params.slug;
  const film = data.find((film) => film.slug === slug);

  if (!film) {
    return Response.error('Film non trovato', 404);
  }

  return Response.json(film);
}
