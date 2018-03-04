import FlickrService from './api/flickr_service';

const app = () => {
  FlickrService.request('summer flowers');
};

app();
