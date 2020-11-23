import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class criarDependentes1606102763914 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table ({
      name: 'dependentes',
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
          name: 'data_nascimento',
          type: 'varchar',
        },
        {
          name: 'grau_parentesco',
          type: 'varchar',
        },
        {
          name: 'id_funcionario',
          type: 'integer'
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
        }
      ]
    }))

    await queryRunner.createForeignKey(
      'dependentes',
      new TableForeignKey({
        columnNames: ['id_funcionario'],
        referencedColumnNames: ['id'],
        referencedTableName: 'funcionarios',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('dependentes')
  }
}
