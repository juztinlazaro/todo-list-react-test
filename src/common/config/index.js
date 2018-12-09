const BASE_URL = process.env.REACT_APP_API_URL || 'localhost';

const api = {
  auctionBaseUrl: `//${BASE_URL}.auction.com`,
  employerBaseUrl: `//${BASE_URL}.employer.com`,
  jsonEncode: 'https://jsonplaceholder.typicode.com',
};
export default api;
