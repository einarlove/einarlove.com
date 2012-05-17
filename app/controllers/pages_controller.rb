class PagesController < ApplicationController

  before_filter :authorize, except: :show

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
  	@title = "Create new page"
  end

  def create
  	if page.save!
  		redirect_to page
  	else
  		render :action => :new
  	end
  end

  def edit
  end

  def update
  	page.update_attributes(params[:page])
  	redirect_to page
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
