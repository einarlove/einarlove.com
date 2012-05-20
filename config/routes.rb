Einarlove::Application.routes.draw do

  match "/" => redirect("/portfolio")

  get '/admin' => "admin#index"

  get '/login' => "admin#login"
  post '/login' => "admin#login"
  get '/logout' => "admin#logout"

  resources :pages

 	resources :portfolio

  get '/:id' => 'pages#show'
  get '/pages/:id/delete' => "pages#destroy"
end
