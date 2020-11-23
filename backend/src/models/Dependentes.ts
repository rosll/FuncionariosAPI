import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import Funcionarios from './Funcionarios'

@Entity('dependentes')
export default class Dependentes {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  data_nascimento: string;

  @Column()
  grau_parentesco: string;

  @Column()
  id_funcionario: number;

  @ManyToOne(() => Funcionarios)
  @JoinColumn({ name: 'id_funcionario' })
  funcionario_emp: Funcionarios

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
