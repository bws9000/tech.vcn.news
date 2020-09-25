// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async store => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
    store.addMetadata('mainTitle', 'VCN Tech News')
    store.addMetadata('subTitle', 'when you only have a minute for world news')
    store.addMetadata('dropDownTitle','VCN Tech News')
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })
}
