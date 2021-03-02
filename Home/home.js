const openSideMenuBtn = document.getElementById('openSideMenuBtn');
const homeWrapper = document.querySelector('.home-wrapper');
const footer = document.getElementById('musicPlayer');
const homeContainer = document.querySelector('.home-container');
const mobileBottomMenu = document.getElementById('mobileBottomMenu');

openSideMenuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  homeWrapper.classList.toggle('translateX');
  footer.classList.toggle('translateX');

  mobileBottomMenu.classList.toggle('translateX');
});

// change navbar bg color on scroll
const navBar = document.getElementById('homeMainNav');
const homeMainSection = document.querySelector('.home-main-section');

window.addEventListener('scroll', changeNavBg);

function changeNavBg() {
  console.log(pageYOffset);
  if (pageYOffset > 250) {
    if (navBar.classList.contains('backdrop-blur')) return;
    navBar.style.transform = 'translateY(-200px)';
    setTimeout(() => {
      navBar.classList.remove('bg-transparent');
      navBar.classList.add('backdrop-blur');
      navBar.style.transform = 'translateY(0)';
    }, 100);
  }

  if (pageYOffset === 0) {
    navBar.style.transform = 'translateY(-200px)';
    setTimeout(() => {
      navBar.style.transform = 'translateY(0)';
      navBar.classList.add('bg-transparent');
      navBar.classList.remove('backdrop-blur');
    }, 100);
  }
}

///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ========== row generation ================
///::::::::::::::::::::::::::::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const sectionsData = [
  {
    sectionName: 'Ascoltate di recente',
    albums: [
      {
        coverUrl:
          'https://seeded-session-images.scdn.co/v1/img/track/6EDO9iiTtwNv6waLwa1UUq/it',
        title: 'POPSTAR (feat. Drake) Radio',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706c0000da84f155a408b137b9cd602b9910',
        title: 'ADHD HyperFocus - Techno Study ',
      },
      {
        coverUrl:
          'https://seeded-session-images.scdn.co/v1/img/track/4b8YZVxagUgUfpETkzzpiu/it',
        title: '8 Mile - Soundtrack Version (Edit) Radio',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67616d0000b273d2a9744ce3913664175e9197',
        title: '8 Mile',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67616d0000b27355e1d9de966ecd6ceb705e57',
        title: 'Lene Marlin',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706c0000da84312c595cc4c4655321e39995',
        title: 'Synthwave | Chillwave',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706c0000da84c2719dbc092a0a67d67874ea',
        title: 'Synthwave | Cyberpunk 2021',
      },
      {
        coverUrl:
          'https://mosaic.scdn.co/640/ab67616d00001e0253fde3f68b1cf36ee0a5b67cab67616d00001e02916e34ccc44c2b56cdd0d7e4ab67616d00001e02c6474f0d57d22385440ba000ab67616d00001e02f9ef39657ba18c612641ee6d',
        title: 'A-Exploration Of Space',
      },
      {
        coverUrl:
          'https://mosaic.scdn.co/640/ab67616d00001e021e34bdf6792b78c2da36a767ab67616d00001e0269471a9c0a6073a9beb81410ab67616d00001e02a3070377fc047ec055351d3bab67616d00001e02d4a2f9a24620e329d2db7078',
        title: 'A-Discovering Vol.2',
      },
    ],
  },
  {
    sectionName: 'Approfondisci le notizie',
    albums: [
      {
        coverUrl:
          'https://i.scdn.co/image/987deaed25e6c6d3cdcdc2b4d6fbb84184169b34',
        title: 'Muschio Selvaggio',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/1d0e2c9ac096b13d2ef7b542fd281d70d9f1e117',
        title: 'JustMick - Il podcast',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/0998b40c53cfccd842c791d805816b14a8e9a7e7',
        title: 'Investhero Podcast',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/10d2a5ca758943852159222c60873b45ea95765a',
        title: 'Smettere di lavorare',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/6b940e724225e4cd764e79371880e899e10692de',
        title: 'Il Buongiorno di Daniele Di Benedetti',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ce3da904c08e5d4f2a362b39771b3e0ef1f885e7',
        title: 'VENTI',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/40617a4d856c0e118df2c75a5d79bfd672e88f3d',
        title: 'Hacking Creativity',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/6410ee272a1b58a43c366fd76b337d8fb66d76cc',
        title: 'Public Speaking Professionale',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/8ca0d78fb7db672d0954f1ca3ce88e7eece569da',
        title: 'Storie di Geopolitica',
      },
    ],
  },
  {
    sectionName: 'Rock',
    albums: [
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000022cdb0982697cc0ae43b1b5b6',
        title: '00s Rock Anthems',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000028672e2b37d4a0376222a53f6',
        title: '80s Rock Anthems',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000027691acebf96bbd1449d61cff',
        title: 'Rock: i Classici',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002519fc8771d90f496501a4da3',
        title: 'Rock Classics',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000020080976877a9d3661aa62241',
        title: 'Volume',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002b6e605ef428ddef4b7ce24aa',
        title: '90s Rock Anthems',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002dc983c18c09291901b75e3ef',
        title: '70s Rock Anthems',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002a3aa0684281d8c86c6d143a5',
        title: 'Legendary',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000020159e090922c7c514c46816b',
        title: 'Modern Chill Rock',
      },
    ],
  },
  {
    sectionName: 'Un tuffo nel passato',
    albums: [
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002519fc8771d90f496501a4da3',
        title: 'Rock Classics',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000027691acebf96bbd1449d61cff',
        title: 'Rock: i Classici',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000204920365f870708dd107711e',
        title: 'Old School Hip-Hop House Party',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002aa1eeba84e355e537a6e8c41',
        title: 'Throwback Party',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002644b5bfc5f19f142854a00b3',
        title: 'Summer Hits of the 00s',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002320f20022a9b6a6e55204a30',
        title: 'All Out 00s',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000025f4b625f7dfcb4733381bac3',
        title: "I Love My '90s Hip-Hop",
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002d80282c954a249a668c4c5ce',
        title: 'All Out 80s',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002b8c66d3b26fe38c2bc1ce8fa',
        title: 'Summer Hits of the 90s',
      },
    ],
  },
  {
    sectionName: 'Electronic/Dance',
    albums: [
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002ce15ef5d178305ffc51e454e',
        title: 'SLAP!',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000021df043181e0a5b20707ce3a9',
        title: 'Brain Food',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002377cd62f388e2de7c3b2b08c',
        title: 'Dance Classics',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002470dd505fcf08e4693db9b24',
        title: 'Dance Party',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002fe0099a8dcd3054706ffc92f',
        title: 'Happy Beats',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002bc42ba887b3369b48d4265af',
        title: 'EDM Samplings',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002531306eed8b8133bb53668ef',
        title: 'Pop Remix',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002872e5ee06a1277cd71ac8c21',
        title: 'Italo Dance',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000288165523fdefdb36279ffb99',
        title: 'Deep House Relax',
      },
    ],
  },
  {
    sectionName: 'Altro di ciò che ti piace',
    albums: [
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000021d616f57fae9efc6fd4c084a',
        title: 'Songs We Rocked Out To',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000025ef83703c96f58d3d7409c8a',
        title: '00s Metal Classics',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002929e39d3550da276515b31f2',
        title: 'Adrenaline Workout',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002b6ce3ad849b97fb35ee91cb2',
        title: 'Rock Me UP!',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002edc5a6f5cc884161889397c7',
        title: 'Born To Run 150 BPM',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000020efdb4cc892aa5412a25922f',
        title: 'Rock School',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002370772191e128bdc97c9cc37',
        title: 'Best of Rock: 2002',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002accc5f5a39c4b1b4eeca4fe5',
        title: 'Best of Rock: 2001',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000024eb58a097da59ad442e26bf2',
        title: 'Pure Rock & Roll',
      },
    ],
  },
  {
    sectionName: 'Clubbing',
    albums: [
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002895015c72e8b9e48809569e3',
        title: 'Lowkey Tech',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002324739b678f2054b9263b8d2',
        title: 'Electronic Circus',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000026d45d74d83113aaf580a903f',
        title: 'Operator',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000029f044720b80a9acfbd93da14',
        title: 'Techno State',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002d532669fba5f648d4bbfe73f',
        title: 'Techno Bunker',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000026ba006fed34441dc16efd8d8',
        title: 'House is a Feeling',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000245e1025ae30404128c57d824',
        title: 'Altar',
      },
    ],
  },
  {
    sectionName: 'Aspettando Sanremo 2021!',
    albums: [
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002fa2f7be1c54e55aa20e6c29b',
        title: 'Aspettando Sanremo 2021',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000025af9d9c16581f21dd25fdbd4',
        title: 'Sanremo 2021',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000029e4fce0c9ee78ee334edca87',
        title: 'Sanremo: La Voce delle Donne',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002041970c74f8deef0aa02e2fb',
        title: 'Sanremo: Schegge Impazzite',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000201cfa2a21aa7d7bcac5ae05f',
        title: 'Sanremo: Giovani Scoperte',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000020ba2b9b4e997825f682eb623',
        title: 'Sanremo: I Vincitori',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002a9b44476172c40e6ed924807',
        title: 'Top Hits Italia',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000023f0cdcad0c2dc7434d3884bf',
        title: 'Plus Ultra',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002453a5d0ef454ffaf266d05f8',
        title: 'Big Italiani',
      },
    ],
  },
  {
    sectionName: 'Le playlist più ascoltate',
    albums: [
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000021a5d7488af0f1fab1a1ecde4',
        title: 'Operazione Buonumore!',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000028b5c697ffec1893d0e3584fc',
        title: 'Ad Alta Intensità!',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002978da3e8f824824da11034b7',
        title: 'Il Caffè del Buongiorno!',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002d4c4153e581b2a64d32daece',
        title: "Today's Top Hits",
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000024dc742b7e0eea14f95860420',
        title: 'Canta Sotto La Doccia',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002f5bdec33867edbcb61cd7421',
        title: 'Canzoni di Natale',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000024cf6f6e37b77edbe3c5544a8',
        title: 'Hit Internazionali',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000224d893d541fff3760e25ab0a',
        title: 'Hit Italiane',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002b9825eb6de439aebe32f6d5c',
        title: 'Cantautorato Italiano',
      },
    ],
  },
  {
    sectionName: 'Creato per Ardi Germenji',
    albums: [
      {
        coverUrl:
          'https://newjams-images.scdn.co/v3/discover-weekly/PHgqTSg04ymMoXnJ0KAwvkV2y_6hQbAOygayuy2sHjFrLM2HsrVMGk965Iqow5bYem1b_ZWRPcYvtrRC3-YqEKX6oR6ceqWXci0ThUY_sJY=/NTE6MTU6MTFUNTEtMzAtMQ==/default',
        title: 'Discover Weekly',
      },
      {
        coverUrl:
          'https://dailymix-images.scdn.co/v2/img/d36e6c72593f847920eff8a28871e5a7bdec3af0/1/it/default',
        title: 'Daily Mix 1',
      },
      {
        coverUrl:
          'https://dailymix-images.scdn.co/v2/img/1972baa1fba2b82077378e860456857098c720cd/2/it/default',
        title: 'Daily Mix 2',
      },
      {
        coverUrl:
          'https://dailymix-images.scdn.co/v2/img/7ca743e822b80133971ccf5c70fcbd77a4f4f508/3/it/default',
        title: 'Daily Mix 3',
      },
      {
        coverUrl:
          'https://dailymix-images.scdn.co/v2/img/56f4762485066b4ef867b96e16775f2b5b4db277/4/it/default',
        title: 'Daily Mix 4',
      },
      {
        coverUrl:
          'https://dailymix-images.scdn.co/v2/img/86da45ccaed25f5519666412561f53007331442a/5/it/default',
        title: 'Daily Mix 5',
      },
      {
        coverUrl:
          'https://dailymix-images.scdn.co/v2/img/b3dff046a0005b51b1e8c87b323d002b664e7b93/6/it/default',
        title: 'Daily Mix 6',
      },
      {
        coverUrl:
          'https://newjams-images.scdn.co/v3/release-radar/edbf06bc3438623272dda621ad46823f145add74/it/default',
        title: 'Release Radar',
      },
      {
        coverUrl: 'https://misc.scdn.co/home-mix/family_default.png',
        title: 'Family Mix',
      },
    ],
  },
  {
    sectionName: 'Altri come Bowling For Soup',
    albums: [
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002c4a849a08c440c42ce5ba2d3',
        title: 'Punk Essentials',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000294679414e06a576e2928f8ff',
        title: 'Pop Punk Powerhouses',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000027c6fd6e38de56e19e85379b7',
        title: 'Emo Forever',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000020a458c5f9cf31d3f9da748bf',
        title: 'Best of Rock: 2007',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002370772191e128bdc97c9cc37',
        title: 'Best of Rock: 2002',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000027c3ecbb1ee121582aed0d836',
        title: 'Best of Rock: 2005',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000220ce0da49d055a331fff742b',
        title: 'Best of Rock: 2004',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000226f7ffa79d2026eae204db06',
        title: 'Best of Rock: 2003',
      },
      {
        coverUrl:
          'https://seeded-session-images.scdn.co/v1/img/artist/5ND0mGcL9SKSjWIjPd0xIb/it',
        title: 'Bowling For Soup Radio',
      },
    ],
  },
  {
    sectionName: 'Stazioni consigliate',
    albums: [
      {
        coverUrl:
          'https://seeded-session-images.scdn.co/v1/img/artist/7dGJo4pcD2V6oG8kP0tJRR/it',
        title: 'Eminem Radio',
      },
      {
        coverUrl:
          'https://seeded-session-images.scdn.co/v1/img/artist/4RddZ3iHvSpGV4dvATac9X/it',
        title: 'Papa Roach Radio',
      },
      {
        coverUrl:
          'https://seeded-session-images.scdn.co/v1/img/artist/3TVXtAsR1Inumwj472S9r4/it',
        title: 'Drake Radio',
      },
      {
        coverUrl:
          'https://seeded-session-images.scdn.co/v1/img/artist/4sQiXz6GYok2zyqMSHG0MX/it',
        title: 'Bassi Maestro Radio',
      },
      {
        coverUrl:
          'https://seeded-session-images.scdn.co/v1/img/artist/0jdNdfi4vAuVi7a6cPDFBM/it',
        title: 'Lazza Radio',
      },
      {
        coverUrl:
          'https://seeded-session-images.scdn.co/v1/img/artist/5LHRHt1k9lMyONurDHEdrp/it',
        title: 'Tyga Radio',
      },
      {
        coverUrl:
          'https://seeded-session-images.scdn.co/v1/img/artist/49UAapOfpOg1ZOU4xf2NgY/it',
        title: 'Noyz Narcos Radio',
      },
      {
        coverUrl:
          'https://seeded-session-images.scdn.co/v1/img/artist/6dKdNHGdsBvEeNDxXV8AMP/it',
        title: 'Ensi Radio',
      },
      {
        coverUrl:
          'https://seeded-session-images.scdn.co/v1/img/artist/4xRYI6VqpkE3UwrDrAZL8L/it',
        title: 'Logic Radio',
      },
    ],
  },
  {
    sectionName: 'Allenamento Metal',
    albums: [
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002e8c71cdea005591de57e3ee7',
        title: 'Beast Mode Rock',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002929e39d3550da276515b31f2',
        title: 'Adrenaline Workout',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000282894e9aedb86fd9f2f724db',
        title: 'One More Rep',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002a40b02d3a28f61b6f87e4a73',
        title: 'Metal Charge 180 BPM',
      },
      {
        coverUrl:
          'https://pl.scdn.co/images/pl/default/632797c8c92d317b274356b1cea14c365968961b',
        title: 'Extreme Metal Workout',
      },
    ],
  },
  {
    sectionName: 'Altri come Metallica',
    albums: [
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000021e192cf416d6921f47a0eae4',
        title: 'Metal Essentials',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000020aedfa51a02afc69b9104efa',
        title: 'Party Hard',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002144b5328c5a786d59a6aa9f1',
        title: 'Old School Metal',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002475137d009c463742221231b',
        title: '90s Metal Classics',
      },
      {
        coverUrl:
          'https://seeded-session-images.scdn.co/v1/img/artist/2ye2Wgw4gimLv2eAKyk1NB/it',
        title: 'Metallica Radio',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000021885498bb60bf587a9b22b5e',
        title: 'Metal Empire',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002b73b8219c4d4aa323c9747de',
        title: 'Headbanger Halloween',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002c453775ecad825aa5ca5404d',
        title: 'Metal Covers',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000276ccf8d29b326acac28c8aa3',
        title: 'Deep Dive - 00s Metal',
      },
    ],
  },
  {
    sectionName: "Rock anni '00",
    albums: [
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002fcd71af8bfcaa6be838321aa',
        title: 'Best of Rock: 2000',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000020a458c5f9cf31d3f9da748bf',
        title: 'Best of Rock: 2007',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002c33421b8a5b93615103253ae',
        title: 'Best of Rock: 2008',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002370772191e128bdc97c9cc37',
        title: 'Best of Rock: 2002',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000027c3ecbb1ee121582aed0d836',
        title: 'Best of Rock: 2005',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002e78fdb6775607ecc8ffaf02b',
        title: 'Best of Rock: 2009',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000226f7ffa79d2026eae204db06',
        title: 'Best of Rock: 2003',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000220ce0da49d055a331fff742b',
        title: 'Best of Rock: 2004',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002accc5f5a39c4b1b4eeca4fe5',
        title: 'Best of Rock: 2001',
      },
    ],
  },
  {
    sectionName: 'Hip Hop motivazionale',
    albums: [
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002e883b46e3ec74925318afe00',
        title: 'Hip-Hop Drive',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000024f30c8dc01ec9abfb075d494',
        title: 'Rap Motivazionale',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000026f670407632d13cf7e9c4f5d',
        title: 'Allenamento Hip Hop',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002f3aea83e089670a11bc2843f',
        title: 'Grime Shutdown',
      },
    ],
  },
  {
    sectionName: 'Il meglio degli artisti',
    albums: [
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000298e7901451a3de0766cb9b3a',
        title: 'This Is Florence + The Machine',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002f67596000f8b5f05ba511f7d',
        title: 'This Is Limp Bizkit',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000022e7da1c7e45b7d953954caf0',
        title: 'This Is Red Hot Chili Peppers',
      },
      {
        coverUrl:
          'https://thisis-images.scdn.co/37i9dQZF1DZ06evO0bM2ze-default.jpg',
        title: 'This Is Solee',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000215d650f7d085c446423ea6d3',
        title: 'This Is Paul Kalkbrenner',
      },
      {
        coverUrl:
          'https://thisis-images.scdn.co/37i9dQZF1DZ06evO0DJCDw-default.jpg',
        title: 'This Is Adam Beyer',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002e13690b078be74aa8dec5be0',
        title: 'This Is Slayer',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002ef5f56fdfa910a37ed9212b0',
        title: 'This Is Post Malone',
      },
      {
        coverUrl:
          'https://thisis-images.scdn.co/37i9dQZF1DZ06evO1vHx6D-default.jpg',
        title: 'This Is Kölsch',
      },
    ],
  },
  {
    sectionName: '100% Emo',
    albums: [
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000027c6fd6e38de56e19e85379b7',
        title: 'Emo Forever',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000211cf9dcb9a9c4ad885e99ec4',
        title: 'This Is Linkin Park',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002d3384b53dacf17293efd7e19',
        title: 'This Is Green Day',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000022f2ad0d2f58222394dbcfe58',
        title: 'This Is Good Charlotte',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002f265545fd206d7062332107c',
        title: 'This Is blink-182',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67616d0000b2739a482180e6a306229bff49dc',
        title: 'All Killer, No Filler',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002c50d9e9411b13c51a5adf533',
        title: 'This Is My Chemical Romance',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000022f72d65ab48db9c09b56678c',
        title: 'This Is All Time Low',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002212c821d293e82eb4bd1ba04',
        title: 'This Is Avril Lavigne',
      },
    ],
  },
  {
    sectionName: 'Buonumore',
    albums: [
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000268eb4355c65b3b65db6f9581',
        title: 'Walk Like A Badass',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000025918ed120609487bbca4d873',
        title: 'Cheesy Hits!',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002fd076b5e9bdffcd1929c7290',
        title: 'Classic Road Trip Songs',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000286d1f02b661c3d9da8df2787',
        title: 'Happy Favorites',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002e649da22aa371c86c801603f',
        title: 'Have a Great Day!',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002fe0099a8dcd3054706ffc92f',
        title: 'Happy Beats',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002dd9bd386a29775a4e0600df9',
        title: 'Uplifting Soul Classics',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002314724fc7ca36a4fce2f1b6a',
        title: 'Heart Beats',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002bf4545e8d7e6b7e377980995',
        title: 'Daily Lift',
      },
    ],
  },
  {
    sectionName: 'In base a ciò che hai ascoltato di recente',
    albums: [
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002320f20022a9b6a6e55204a30',
        title: 'All Out 00s',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000024a2afca194d4819c57201bc3',
        title: 'Guilty Pleasures',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000025bc71061b63920adbd7e3986',
        title: 'Just Try to Forget These Songs',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000020fed4e2fe014e5ba66f8d185',
        title: 'Just Get Going! 155 BPM',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000291208168c4d7591ce5c87651',
        title: 'Most Streamed Songs of the Decade',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f000000028663be06e69f49628cf83a56',
        title: 'The Party Hits of the 2010s',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f0000000227492b763e63a7bd014dde02',
        title: "10 Summers You Won't Forget",
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002d86fabce55538bfae42ff6d7',
        title: 'I Love My Down South Classics',
      },
      {
        coverUrl:
          'https://i.scdn.co/image/ab67706f00000002fc6ab4376b6801108a2113dd',
        title: 'Le Hit Del 2007',
      },
    ],
  },
];

sectionsData.forEach((section, idx) => {
  const { sectionName, albums } = section;
  const sectionHTML = `
  <section id="section-${idx + 1}" class="cards-section">
    <h6 class="section-name">${sectionName}</h6>
    <div class="row no-gutters row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-lg-9 mb-4">
        ${albums
          .map(
            (album) => `
             <div class="col">
                <div class="card-custom">
                  <img src="${album.coverUrl}" class="card-img img-fluid w-100" alt="" />
                  <div class="card-body-custom">
                    <h6 class="card-title-custom">${album.title}</h6>
                    <p class="card-text-custon">random text</p>
                  </div>
                </div>
              </div>
        `
          )
          .join('')}
    </div>
  </section>
  `;
  homeMainSection.insertAdjacentHTML('beforeend', sectionHTML);
});
