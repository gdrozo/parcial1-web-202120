const { response, request } = require('express');
const https = require('https')


const getPairsOfPlayers = async (req = request, resp = response, height , next) => {
  console.log('goes in')
  let data = ''
  await (()=> new Promise ((resolve, error) => {https.get('https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players', result => {
    result.on("data", c => {
      data += c
    })

    result.on('end', ()=>{ 
      data = JSON.parse(data).values
      //console.log('data', data)
      players = []
      players = data
      resolve()
      
    })
  })}))()
  return players //.slice(0, 20)
};

module.exports = { getPairsOfPlayers };
