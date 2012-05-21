class PortfolioController < ApplicationController

	before_filter :authorize, except: :show

	def show
		item = PortfolioItem.find(params[:id]) 
	end

  private

  def item
  	item ||= params[:id] ? PortfolioItem.find(params[:id]) : PortfolioItem.new(params[:page])
  end
  helper_method :item

end