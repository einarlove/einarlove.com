class RenamePortfolioToPortfolioItems < ActiveRecord::Migration
  def up
    rename_table :portfolio, :portfolio_items
  end
  def down
    rename_table :portfolio_items, :portfolio
  end
end
