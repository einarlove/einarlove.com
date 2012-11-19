class PortfolioItemsController < ApplicationController

	before_filter :authorize, except: :show

	def show
		item = PortfolioItem.find(params[:id])
	end

	def new
		item = PortfolioItem.new
		render "portfolio_form", layout: "admin"
	end

	def create
		if item.save
			redirect_to "/portfolio/#{item.slug}"
		else
			render :action => :new
		end
	end


	def edit
		render "portfolio_form", layout: "admin"
	end

	def update
		throw params[:portfolio_item][:involvement].to_array
		# item.update_attributes(params[:portfolio_item])
		# redirect_to "/portfolio/#{item.slug}"
	end

	private

	def item
		item ||= params[:id] ? PortfolioItem.find(params[:id]) : PortfolioItem.new(params[:portfolio_item])
	end
	helper_method :item

end