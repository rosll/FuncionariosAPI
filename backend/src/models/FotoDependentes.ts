import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import Dependentes from './Dependentes'

@Entity('foto_dependentes')
export default class FotoFuncionarios {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  path: string;

  @ManyToOne(() => Dependentes, dependente => dependente.fotodep)
  @JoinColumn({ name: 'dependente_id' })
  dependente: Dependentes;
}