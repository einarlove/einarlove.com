class AdminController < ApplicationController

	before_filter :authorize, except: :login

	layout "admin"

  def index
  	@description = "Overview"
  	@pages = Page.all
  	@portfolio = PortfolioItem.all
  end

	def login
		if request.post?
			session[:username] = params[:username]
			session[:password] = params[:password]
			if admin?
				redirect_to "/admin"
			else
				redirect_to "/login", :notice => "wrong username or password"
			end
		end
	end

	def logout
		reset_session
		redirect_to "/"
	end
end
