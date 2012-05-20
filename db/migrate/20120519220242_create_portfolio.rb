class CreatePortfolio < ActiveRecord::Migration
  def change
    create_table :portfolio do |t|
      t.string :title
      t.text :body
      t.string :involvement
      t.string :links
      t.string :image
      t.boolean :visible
      t.string :slug
      t.timestamps
    end
  end
end
