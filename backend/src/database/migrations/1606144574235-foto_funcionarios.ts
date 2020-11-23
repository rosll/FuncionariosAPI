import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class fotoFuncionarios1606144574235 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'foto_funcionarios',
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
          name: 'path',
          type: 'varchar'
        },
        {
          name: 'funcionario_id',
          type: 'integer'
        }
      ],
      foreignKeys: [
        {
          name: 'FotoFuncionario',
          columnNames: ['funcionario_id'],
          referencedTableName: 'funcionarios',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('foto_funcionarios')
  }

}
