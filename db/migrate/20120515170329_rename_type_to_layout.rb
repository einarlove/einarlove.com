class RenameTypeToLayout < ActiveRecord::Migration
  def up
  	rename_column :pages, :type, :layout
  end

  def down
  	rename_column :pages, :layout, :type
  end
end
