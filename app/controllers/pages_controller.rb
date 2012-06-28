# encoding: utf-8
class PagesController < ApplicationController

	before_filter :authorize, except: [:show, :contact, :mail]

	def index
		@pages = Page.all
		page.title = "Einar Löve - Interaction designer"
	end

	def show
		if page.layout == "contact"
			message = Message.new
		end
	end

	def new
		page = Page.new
		render layout: "admin"
	end

	def create
		if page.save
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

	def mail
		@message = Message.new(params[:message])
		if @message.valid?
			ContactMailer.new_message(@message).deliver
			redirect_to("/contact")
			flash[:notice] = "thanks"
		else
			flash[:error] = @message.errors
			flash[:params] = params[:message]
			redirect_to "/contact"
		end
	end

	private

	def page
		page ||= params[:id] ? Page.find(params[:id]) : Page.new(params[:page])
	end
	helper_method :page

end
