export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  info: {
    header: 'Info',
    title: 'About me',
    image: 'https://i.ibb.co/gTw5yry/pexels-ivy-son-3490257-1.jpg',
    imageAlt: 'girl on horseback',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  },
  FAQ: {
    header: 'FAQ',
    title: 'Frequently asked questions',
    image: 'https://i.ibb.co/VJdWvNJ/pexels-pixabay-221164-1.jpg',
    imageAlt: 'magnifier',
    content: [
      {
        key: 0,
        question: 'Proin commodo ligula sed mi fringilla dapibus?',
        answer: `Nam ultrices mi ut turpis mollis consequat. 
        Suspendisse lorem enim, malesuada sit amet dapibus sit amet, volutpat eleifend mi. 
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus.`,
      },
      {
        key: 1,
        question: 'Etiam luctus ipsum ut sapien molestie, at lobortis mauris rhoncus?',
        answer: `Quisque tristique, lectus sit amet scelerisque iaculis, lectus dui tincidunt eros, vitae congue massa mi et quam. 
        Nullam sollicitudin risus diam, vel dictum odio volutpat nec. 
        Nam massa ex, bibendum vitae ligula eu, vehicula egestas odio. 
        Praesent eget magna enim. Cras sit amet dignissim ante. 
        Quisque pulvinar fringilla pharetra.`,
      },
      {
        key: 2,
        question: 'Duis pretium ex sodales sem accumsan, in semper est congue?',
        answer: `Proin ex felis, venenatis non pretium quis, laoreet vitae tellus. In vel vestibulum magna. 
        Cras ex massa, mollis eget feugiat non, dictum rhoncus lectus. Maecenas faucibus ultrices justo id maximus. 
        Cras molestie, lorem in lacinia tincidunt, augue erat tristique dui, eu aliquet magna nibh ut mauris. Sed tempor congue vehicula.`,
      },
    ],
  },
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  imageAlt: 'rocket in outer space',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
