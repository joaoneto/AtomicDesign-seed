const routes = [
  { path: '/', 
    method: 'get', action: 'find' },
  { path: '/', 
    method: 'post', action: 'create' },
  { path: '/filter', 
    method: 'get', action: 'findByFilter' },
  { path: '/populate', 
    method: 'get', action: 'findAllPopulate' },
  { path: '/:id', 
    method: 'get', action: 'findById' },
  { path: '/:id/populate', 
    method: 'get', action: 'findByIdPopulate' },
  { path: '/:id', 
    method: 'put', action: 'update' },
  { path: '/:id', 
    method: 'delete', action: 'remove' },
]

module.exports = (Organism) => {
  const createRouteConfig = require('./factory')(Organism)
  return routes.map(createRouteConfig)
}

