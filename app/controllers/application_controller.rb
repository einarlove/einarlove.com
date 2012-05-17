class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :admin?

  protected

  def authorize
  	unless admin?
  		flash[:error] = "Restricted to admin"
  		redirect_to admin_path
  		false
  	end
  end

  def admin?
  	false
  end
end
