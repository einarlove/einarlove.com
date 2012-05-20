class PortfolioItems < ActiveRecord::Base
  attr_accessible :body, :image, :involvement, :links, :title, :visible
end
