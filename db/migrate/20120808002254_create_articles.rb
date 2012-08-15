class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.string :author
      t.text :content
      t.string :topic
      t.boolean :published
      t.string :slug

      t.timestamps
    end
  end
end
