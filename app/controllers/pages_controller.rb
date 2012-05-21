class PagesController < ApplicationController

  before_filter :authorize, except: :show

  def index
    @pages = Page.all
  end

	def show
	end

  def new
  	page = Page.new
    render layout: "admin"
  end

  def create
  	if page.save!
  		redirect_to page
  	else
  		render :action => :new
  	end
  end

  def edit
    render layout: "admin"
  end

  def update
  	page.update_attributes(params[:page])
  	redirect_to page
  end

  def destroy
    page = Page.find(params[:id])
  	page.delete
  	redirect_to pages_path
  end

  private

  def page
  	page ||= params[:id] ? Page.find(params[:id]) : Page.new(params[:page])
  end
  helper_method :page

end
