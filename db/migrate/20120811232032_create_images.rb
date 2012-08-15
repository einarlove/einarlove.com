class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :name
      t.string :title
      t.string :credit
      t.string :caption
      t.string :extension
      t.string :url

      t.references :article

      t.timestamps
    end
  end
end
