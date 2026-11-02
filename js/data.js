const IMG = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const DESTINATIONS = [
  { name: 'Santorini', country: 'Greece', region: 'europe', tours: 24, from: 1299, img: IMG('photo-1570077188670-e3a8d69ac5ff', 1200) },
  { name: 'Kyoto', country: 'Japan', region: 'asia', tours: 18, from: 1599, img: IMG('photo-1493976040374-85c8e12f0c0e') },
  { name: 'Swiss Alps', country: 'Switzerland', region: 'europe', tours: 15, from: 1899, img: IMG('photo-1531366936337-7c912a4589a7') },
  { name: 'Bali', country: 'Indonesia', region: 'asia', tours: 32, from: 899, img: IMG('photo-1537996194471-e657df975ab4') },
  { name: 'Maldives', country: 'Maldives', region: 'asia', tours: 21, from: 2199, img: IMG('photo-1514282401047-d79a71a590e8') },
  { name: 'Paris', country: 'France', region: 'europe', tours: 40, from: 1099, img: IMG('photo-1502602898657-3e91760cbb34') },
  { name: 'Dubai', country: 'UAE', region: 'middle-east', tours: 28, from: 799, img: IMG('photo-1512453979798-5ea266f8880c') },
  { name: 'Machu Picchu', country: 'Peru', region: 'americas', tours: 12, from: 1499, img: IMG('photo-1587595431973-160d0d94add1') },
  { name: 'Phuket', country: 'Thailand', region: 'asia', tours: 26, from: 749, img: IMG('photo-1528181304800-259b08848526') },
  { name: 'Iceland', country: 'Iceland', region: 'europe', tours: 10, from: 1999, img: IMG('photo-1504893524553-b855bce32c67') },
  { name: 'New York', country: 'USA', region: 'americas', tours: 35, from: 1199, img: IMG('photo-1496442226666-8d4d0e62e6e9') },
  { name: 'Cappadocia', country: 'Turkey', region: 'middle-east', tours: 14, from: 999, img: IMG('photo-1641128324972-af3212f0f6bd') },
];

const TRIPS = [
  { title: 'Greek Islands Escape', place: 'Santorini & Mykonos', type: 'beach', days: 7, people: '2–12', price: 1899, rating: 4.9, reviews: 412, tag: 'Best Seller', img: IMG('photo-1613395877344-13d4a8e0d49e') },
  { title: 'Japan Cultural Journey', place: 'Tokyo, Kyoto & Osaka', type: 'culture', days: 10, people: '2–16', price: 2799, rating: 4.8, reviews: 286, tag: 'Popular', img: IMG('photo-1545569341-9eb8b30979d9') },
  { title: 'Alpine Adventure', place: 'Swiss Alps', type: 'adventure', days: 8, people: '4–10', price: 2399, rating: 4.9, reviews: 154, tag: 'New', img: IMG('photo-1527668752968-14dc70a27c95') },
  { title: 'Bali Wellness Retreat', place: 'Ubud & Seminyak', type: 'beach', days: 6, people: '1–8', price: 1199, rating: 4.7, reviews: 329, tag: 'Wellness', img: IMG('photo-1555400038-63f5ba517a47') },
  { title: 'Maldives Overwater Villa', place: 'North Malé Atoll', type: 'luxury', days: 5, people: '2', price: 3499, rating: 5.0, reviews: 198, tag: 'Luxury', img: IMG('photo-1573843981267-be1999ff37cd') },
  { title: 'Inca Trail Trek', place: 'Cusco & Machu Picchu', type: 'adventure', days: 9, people: '4–12', price: 2199, rating: 4.8, reviews: 143, tag: 'Adventure', img: IMG('photo-1526392060635-9d6019884377') },
  { title: 'Dubai Desert & City', place: 'Dubai & Abu Dhabi', type: 'luxury', days: 5, people: '2–10', price: 1399, rating: 4.7, reviews: 367, tag: 'Hot Deal', img: IMG('photo-1518684079-3c830dcef090') },
  { title: 'Paris & Provence', place: 'France', type: 'culture', days: 8, people: '2–14', price: 2099, rating: 4.8, reviews: 221, tag: 'Romantic', img: IMG('photo-1499856871958-5b9627545d1a') },
  { title: 'Iceland Northern Lights', place: 'Reykjavik & Ring Road', type: 'adventure', days: 7, people: '2–8', price: 2599, rating: 4.9, reviews: 176, tag: 'Seasonal', img: IMG('photo-1531366936337-7c912a4589a7') },
];

const TESTIMONIALS = [
  { name: 'Sarah Johnson', trip: 'Greek Islands Escape', text: 'Every detail was perfect — from the sunset dinner in Oia to our private boat tour. Wanderly made our honeymoon truly unforgettable.', img: IMG('photo-1494790108377-be9c29b29330', 200) },
  { name: 'Michael Chen', trip: 'Japan Cultural Journey', text: 'The local guides were incredible. We saw a side of Kyoto we never would have found on our own. Already planning the next trip!', img: IMG('photo-1472099645785-5658abf4ff4e', 200) },
  { name: 'Aisha Rahman', trip: 'Maldives Overwater Villa', text: 'Booking through the app was effortless, and the support team answered every question within minutes. Pure paradise.', img: IMG('photo-1438761681033-6461ffad8d80', 200) },
  { name: 'David Miller', trip: 'Inca Trail Trek', text: 'Challenging, breathtaking and so well organised. The team handled permits, gear and logistics so we could simply enjoy it.', img: IMG('photo-1500648767791-00dcc994a43e', 200) },
  { name: 'Priya Nair', trip: 'Bali Wellness Retreat', text: 'Yoga at sunrise, rice terraces, amazing food. I came home feeling completely renewed. I recommend Wanderly to everyone I know.', img: IMG('photo-1544005313-94ddf0286df2', 200) },
  { name: 'Lucas Martin', trip: 'Iceland Northern Lights', text: 'We saw the aurora three nights in a row! Our guide knew exactly where to go. A once-in-a-lifetime experience.', img: IMG('photo-1506794778202-cad84cf45f1d', 200) },
];
