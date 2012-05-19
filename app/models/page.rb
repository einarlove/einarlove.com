class Page < ActiveRecord::Base
  attr_accessible :body, :image, :name, :title, :layout, :visible, :slug, :description

  extend FriendlyId
  friendly_id :name, use: :slugged
end
