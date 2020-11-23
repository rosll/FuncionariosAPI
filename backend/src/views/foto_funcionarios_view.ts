import FotoFunc from '../models/FotoFuncionarios'

export default {
  render(foto_func: FotoFunc) {
    return {
      id: foto_func.id,
      url: `http://localhost:3737/uploads/${foto_func.path}`
    }
  },

  renderMany(foto_funcs: FotoFunc[]) {
    return foto_funcs.map(foto_func => this.render(foto_func))
  }
}