import Funcionarios from '../models/Funcionarios'
import FotoFuncView from './foto_funcionarios_view'

export default {
  render(funcionario: Funcionarios) {
    return {
      id: funcionario.id,
      nome: funcionario.nome,
      funcao: funcionario.funcao,
      departamento: funcionario.departamento,
      email: funcionario.email,
      telefone: funcionario.telefone,
      fotofunc: FotoFuncView.renderMany(funcionario.fotofunc)
    }
  },

  renderMany(funcionarios: Funcionarios[]) {
    return funcionarios.map(funcionario => this.render(funcionario))
  }
}