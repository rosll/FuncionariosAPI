import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class fotoDependentes1606145034875 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'foto_dependentes',
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
          name: 'dependente_id',
          type: 'integer'
        }
      ],
      foreignKeys: [
        {
          name: 'FotoDependente',
          columnNames: ['dependente_id'],
          referencedTableName: 'dependentes',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('foto_dependentes')
  }

}