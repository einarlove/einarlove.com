class PagesController < ApplicationController

	def show
		@page = Page.find(params[:id])
		@title = @page.title
		@description = @page.description
		@name = @page.name
		@notice = "!!!!!"
	end

  def index
  	@pages = Page.all
  end

  def portfolio
  end

  def about
  end

  def new
  	@page = Page.new
  end

  def create 
  	@page = Page.new params[:page]
  	if @page.save!
  		redirect_to page_path(@page)
  	else
  		render :action => :new
  	end
  end

    def destroy
  	@page = Page.find(params[:id])
  	@page.destroy
  	redirect_to pages_path
  end
end
