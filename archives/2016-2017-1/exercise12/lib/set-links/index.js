import * as cheerio from 'cheerio';

export const setLinks = (source = '', link, linkIndex) => {
  const $ = cheerio.load(source, { decodeEntities: true });

  $('a[href]')
    .filter(index => index === linkIndex)
    .each((index, element) => _setLinkData($(element), link));

  return $.html();
};


function _setLinkData(element, link) {
  element.text(link.text);
  element.attr('href', link.href);
}

