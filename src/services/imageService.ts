const imageIds: string[] = [
  '1537801568098-ba6c40d0a1a2',
  '1532680552323-28232070e5f9',
  '1526335727645-74a18e4ffb2f',
  '1532928448850-d740ccdd9f9c',
  '1502484620858-cd078a22fa7c',
  '1494493648617-3edda2de6c0f',
  '1520319553239-ec48795d5e49',
  '1511098515712-a269190819a7',
  '1539185011188-6ca25a42d9aa',
  '1519982829456-56d6b5582309',
  '1508164624366-96fce04cf1f1',
  '1537620189496-eea8094eef73',
  '1534578037805-4d6c5560cfbd',
  '1521134823423-28bfa5a2475a',
  '1502118639732-ed2f97e768db',
  '1517019845824-ee2053e3b4f6',
  '1508170404617-e7e4915ffebc',
  '1516423679984-e621aa471732',
  '1512788616552-0bdc65c1a8e3',
  '1487901155524-307f976ad775',
];

function buildUrlFromId(id: string): string {
  return `https://images.unsplash.com/photo-${id}?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&fit=crop&w=1350&h=2400`;
}

export function getRandomImageUrl(lastUrl: string | null): string {
  let newUrl: string | null = null;

  do {
    const randomIndex = Math.floor(Math.random() * imageIds.length);
    const randomId = imageIds[randomIndex];
    newUrl = buildUrlFromId(randomId);
  } while (newUrl === lastUrl);

  return newUrl;
}
