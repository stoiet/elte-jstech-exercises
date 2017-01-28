import * as cheerio from 'cheerio';

export const collectLinks = source => {
  const $ = cheerio.load(source, { decodeEntities: true });
  return $('a[href]')
    .map((index, element) => _getLinkData($(element)))
    .toArray();
};

function _getLinkData(element) {
  return {
    text: element.text(),
    href: element.attr('href')
  };
}
