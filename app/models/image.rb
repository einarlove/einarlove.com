class Image < ActiveRecord::Base
  attr_accessible :name, :title, :credit, :caption, :extension, :url
  belongs_to :article
end
