import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class criarFuncionarios1606100136527 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'funcionarios',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'nome',
          type: 'varchar'
        },
        {
          name: 'funcao',
          type: 'varchar'
        },
        {
          name: 'departamento',
          type: 'varchar'
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,
        },
        {
          name: 'telefone',
          type: 'integer'
        },
        {
          name: 'curtir',
          type: 'number',
          default: 0
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('funcionarios')
  }
}
