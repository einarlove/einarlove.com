class Article < ActiveRecord::Base
  attr_accessible :title, :author, :content, :content_html, :topic, :published, :slug
  has_many :images

  before_save :generate_html

  extend FriendlyId
  friendly_id :title, use: :slugged

  protected

  def generate_html
    return if content.blank?
    markdown = Redcarpet::Markdown.new(
      Redcarpet::Render::HTML.new(),
      no_intra_emphasis: true,
      autolink: true,
      fenced_code_blocks:true,
      strikethrough: true)

    self.content_html = Redcarpet::Render::SmartyPants.render(
      markdown.render(content))
  end
end
