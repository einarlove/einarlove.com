class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string :name
      t.string :title
      t.string :description
      t.text :body
      t.string :layout
      t.boolean :visible
      t.string :image
      t.string :slug

      t.timestamps
    end
  end
end
