class Pages < ActiveRecord::Base
  attr_accessible :body, :description, :image, :layout, :name, :slug, :title, :visible
end
