require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    Rinkeby: {
      url : 'https://eth-rinkeby.alchemyapi.io/v2/VrfOebfM4RJxPhrPCAo8XxN63qCjmSam',
      accounts: ['6795f52b5a69613a5e894c3ad10c3d755aecbc27f645d118302ea1857ac98a54']
    }
  }
}