Einarlove::Application.routes.draw do


	# Root
  match "/" => redirect("/portfolio")

  #Admin
  get '/admin' => "admin#index"
  get '/login' => "admin#login"
  post '/login' => "admin#login"
  get '/logout' => "admin#logout"

  #Pages
  resources :pages
	get '/:id' => 'pages#show'
	get '/pages/:id/delete' => "pages#destroy"

	#Portfolio
 	resources :portfolio

  #Contact form
  match 'contact' => 'contact#new', :as => 'contact', :via => :get
  match 'contact' => 'contact#create', :as => 'contact', :via => :post
  
end
