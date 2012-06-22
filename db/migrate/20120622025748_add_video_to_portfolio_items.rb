class AddVideoToPortfolioItems < ActiveRecord::Migration
  def change
    add_column :portfolio_items, :video, :string
  end
end
