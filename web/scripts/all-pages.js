const fs = require('fs');
const dotenv = require('dotenv');
const { gql, request } = require('graphql-request');

dotenv.config({
  path: './.env.local',
});

const query = gql`
  {
    allPages {
      _id
      slug {
        current
      }
      title
    }
  }
`;

async function getAllPages() {
  const data = await request(process.env.SANITY_URL, query);

  fs.writeFile('./src/data/allPages.json', JSON.stringify(data), (err) => {
    if (err) throw err;
    console.info('Pages data written to file');
  });
}

async function main() {
  try {
    await getAllPages();
  } catch (err) {
    throw new Error(err);
  }
}

main();
