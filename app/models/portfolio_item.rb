class PortfolioItem < ActiveRecord::Base
  attr_accessible :body, :image, :involvement, :links, :title, :visible, :video, :slug
  serialize :involvement
  serialize :links


  belongs_to :portfolio

  extend FriendlyId
  friendly_id :title, use: :slugged
end
