class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :name
      t.string :title
      t.text :body
      t.string :image
      t.string :type
      t.boolean :visible

      t.timestamps
    end
  end
end
