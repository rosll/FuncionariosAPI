import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Funcionarios from './Funcionarios'

@Entity('foto_funcionarios')
export default class FotoFuncionarios {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Funcionarios, funcionario => funcionario.fotofunc)
  @JoinColumn({ name: 'funcionario_id' })
  funcionario: Funcionarios;
}
