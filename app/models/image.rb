class Image < ActiveRecord::Base
  attr_accessible :image_content_type, :image_file_name, :image_file_size, :image_updated_at

  belongs_to :pages
  belongs_to :portfolio

  has_attached_file :image, styles: {normal: "595x*", thumb: "290x180"}
end
