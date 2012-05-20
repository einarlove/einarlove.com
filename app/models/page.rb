class Page < ActiveRecord::Base
  attr_accessible :body, :image, :name, :title, :layout, :visible, :slug, :description

  validates :name,   presence: true
	validates :layout, presence: true
  validates :slug,   presence: true, uniqueness: true
  
  extend FriendlyId
  friendly_id :name, use: :slugged
end
