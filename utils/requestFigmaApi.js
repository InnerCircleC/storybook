require('dotenv').config()

const fs = require('fs')
const axios = require('axios')

const accessToken = process.env.FIGMA_ACCESS_TOKEN

const domain = 'https://api.figma.com'
const fileKey = 'aNVawX1CWLshEHGPEljGfJ'

axios
  .get(`${domain}/v1/files/${fileKey}`, {
    headers: {
      'X-Figma-Token': accessToken,
    },
  })
  .then(res => {
    const resultJSON = JSON.stringify(res.data)
    fs.mkdirSync('src/stories/assets/design-tokens', { recursive: true })
    fs.writeFileSync('src/stories/assets/design-tokens/token.json', resultJSON)
  })
  .catch(err => console.warn(err))
