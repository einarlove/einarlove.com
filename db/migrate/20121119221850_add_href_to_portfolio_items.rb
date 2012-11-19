class AddHrefToPortfolioItems < ActiveRecord::Migration
  def change
    add_column :portfolio_items, :href, :string
  end
end
