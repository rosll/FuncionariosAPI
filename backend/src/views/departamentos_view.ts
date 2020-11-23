import Dependentes from '../models/Dependentes'
import FotoDepView from './foto_departamentos_view'

export default {
  render(dependente: Dependentes) {
    return {
      id: dependente.id,
      nome: dependente.nome,
      data_nascimento: dependente.data_nascimento,
      grau_parentesco: dependente.grau_parentesco,
      id_funcionario: dependente.id_funcionario,
      fotodep: FotoDepView.renderMany(dependente.fotodep)
    }
  },
  
  renderMany(dependentes: Dependentes[]) {
    return dependentes.map(dependente => this.render(dependente))
  }
}
