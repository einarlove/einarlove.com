# encoding: utf-8
class ArticlesController < ApplicationController

  before_filter :authorize, except: [:index, :show, :about, :image]

  def index
    @page_title = "All articles"
  end

  def show
  end

  def about
    @page_title = "All articles about #{params[:topic]}"
    @articles = Article.where(topic: params[:topic]).order(:created_at).reverse_order
  end

  def new
    article = Article.new
    render "article_form", layout: "admin"
  end

  def create
    if article.save
      redirect_to article
    else
      render :action => :new
    end
  end

  def edit
    render "article_form", layout: "admin"
  end

  def update
    article.update_attributes(params[:article])
    redirect_to article
  end

  def image
    image = article.images.find_by_name_and_extension(params[:name], params[:extension])
    redirect_to "/article_images/blog-poster.jpg" 
  end

  private

  def article
    article ||= params[:id] ? Article.find(params[:id]) : Article.new(params[:article])
  end
  def articles
    articles = Article.find(:all, order: "created_at DESC")
  end
  helper_method [:article, :articles]
end
