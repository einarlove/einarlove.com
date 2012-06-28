class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :admin?

  protected

  def authorize
  	unless admin?
  		flash[:error] = "Restricted to admin"
  		redirect_to "/login"
  		false
  	end
  end

  def admin?
  	session[:username] == SENSITIVE["username"] and session[:password] == SENSITIVE["password"]
  end
end
