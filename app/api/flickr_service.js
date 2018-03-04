
const FLICKR_API = 'https://api.flickr.com/services/rest/?';
const FA_METHOD_SEARCH = 'flickr.photos.search';

export default class FlickrService {
  /**
   * perform a Flickr tag search via GET
   *
   * @static
   * @param {string} query
   * @memberof FlickrService
   */
  static request(query) {
    const req = Object.assign({ text: query }, {
      format: 'json',
      method: FA_METHOD_SEARCH,
      api_key: process.env.FLICKR_API_KEY,
      per_page: 50,
    });
    const params = Object.keys(req).reduce((acc, elem) => {
      acc.push(`${elem} + '=' + ${encodeURIComponent(req[elem])}`);
      return acc;
    }, []);

    console.log(FLICKR_API + params.join('&'));
  }
}
