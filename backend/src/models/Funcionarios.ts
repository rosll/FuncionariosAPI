import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from 'typeorm'
import FotoFuncionarios from './FotoFuncionarios'

@Entity('funcionarios')
export default class Funcionarios {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  funcao: string;

  @Column()
  departamento: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  @Column()
  curtir: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => FotoFuncionarios, foto => foto.funcionario, {
    cascade: ['insert', 'update']
  })
  @JoinColumn({ name: 'funcionario_id' })
  fotofunc: FotoFuncionarios[]
}
