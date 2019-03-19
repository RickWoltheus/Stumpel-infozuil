/* eslint-disable no-return-await */
import * as contentful from 'contentful';

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENFULL_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

export async function getOneProduct(id) {
  return await client.getEntries({
    'sys.id': id,
    content_type: 'book',
  });
}

export async function getGenre(genre) {
  return await client.getEntries({
    'fields.genre': genre,
    content_type: 'book',
  });
}

export function getAllGenres() {
  return [
    'thrillers',
    'literatuur',
    'kookboeken',
    'kinderboeken',
    'fantasy',
    'young_adults',
    'gezondheid_zwangerschap_psychologie',
    'computer_internet',
    'kunst_cultuur',
    'business_management',
    'esoterie_spiritualiteit',
    'natuur_tuinieren',
    'religie_filosofie',
    'studie_schoolboeken',
    'wonen_lifestyle',
    'stripboeken',
    'other',
    'sport_hobby',
    'reisgidsen_taalgidsen'
  ]

}

export async function getAllProducts(searchData = null) {
  return await client.getEntries({
    'fields.title': searchData,
    content_type: 'book',
  });
}

export async function getAllCarouselItems(searchData = null) {
  return await client.getEntries({
    content_type: 'carousel',
  });
}

