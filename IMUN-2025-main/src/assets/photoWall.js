// Photo wall images hosted on Cloudinary (cloud: ce52ytao)
// Tiles are square in the dome gallery, so delivery is cropped to 1:1
// with automatic gravity to keep the main subject in frame.
const CLOUD = 'https://res.cloudinary.com/ce52ytao/image/upload';
const TILE_TRANSFORM = 'c_fill,g_auto,ar_1:1,w_900,q_auto,f_auto';
const FOLDER = 'svvvimun/photowall';

const PHOTO_IDS = [
  'untitled-design',
  'untitled-design-1',
  'untitled-design-2',
  'untitled-design-3',
  'untitled-design-4',
  'untitled-design-5',
  'untitled-design-6',
  'untitled-design-7',
  'untitled-design-8',
  'untitled-design-9',
  'untitled-design-10',
  'untitled-design-11',
  'untitled-design-12',
  'untitled-design-13',
  'untitled-design-14',
  'untitled-design-15',
  'untitled-design-16',
  'untitled-design-17',
  'untitled-design-18',
  'untitled-design-19',
  'untitled-design-20',
  'untitled-design-21',
  'untitled-design-22',
  'untitled-design-23',
  'untitled-design-24',
  'untitled-design-25',
];

export const PHOTOWALL_IMAGES = PHOTO_IDS.map((id, index) => ({
  src: `${CLOUD}/${TILE_TRANSFORM}/${FOLDER}/${id}.png`,
  alt: `SVVVIMUN conference photo ${index + 1}`,
}));
