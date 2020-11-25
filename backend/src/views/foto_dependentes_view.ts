import FotoDep from '../models/FotoDependentes'

export default {
  render(foto_dep: FotoDep) {
    return {
      id: foto_dep.id,
      url: `http://localhost:3737/uploads/${foto_dep.path}`
    }
  },

  renderMany(foto_deps: FotoDep[]) {
    return foto_deps.map(foto_dep => this.render(foto_dep))
  }
}