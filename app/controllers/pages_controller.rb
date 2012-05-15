class PagesController < ApplicationController

	def show
		@title = page.title
		@description = page.description
		@name = page.name
		@notice = "!!!!!"
	end

  def index
  	@pages = Page.all
  end

  def new
  	page = Page.new
  end

  def create
  	if page.save!
  		redirect_to page_path(page)
  	else
  		render :action => :new
  	end
  end

  def edit
  end

  def update
  	redirect_to page_path(page)
  end

  def destroy
  	page.destroy
  	redirect_to pages_path
  end

  private

  def page
  	page ||= params[:id] ? Page.find(params[:id]) : Page.new(params[:page])
  end
  helper_method :page

end
