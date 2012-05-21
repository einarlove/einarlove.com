class PortfolioItem < ActiveRecord::Base
  attr_accessible :body, :image, :involvement, :links, :title, :visible, :slug
  serialize :involvement
  serialize :links
  extend FriendlyId
  friendly_id :title, use: :slugged
end
