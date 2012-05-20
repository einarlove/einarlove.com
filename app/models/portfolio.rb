class Portfolio < ActiveRecord::Base
  attr_accessible :title, :body, :involvement, :links, :image, :visible, :slug

  extend FriendlyId
  friendly_id :title, use: :slugged
end
