Einarlove::Application.routes.draw do

	# Root
	match "/" => redirect("/portfolio")

	#Admin
	get '/admin' => "admin#index"
	get '/login' => "admin#login"
	post '/login' => "admin#login"
	get '/logout' => "admin#logout"

	#Articles
	resources :articles, path: 'article'
	match '/article' => redirect('/articles')
	match '/blog' => redirect('/articles')
	match '/articles' => 'articles#index'
	match '/articles/about/:topic' => 'articles#about'
	get '/article/:id/:name.:extension' => 'articles#image'

	#Pages
	resources :pages
	get '/:id' => 'pages#show'
	get '/pages/:id/delete' => "pages#destroy"

	#Portfolio
	resources :portfolio_items
	get '/portfolio/:id' => 'portfolio_items#show'

	#Contact form
	post '/contact' => 'pages#mail'

end
