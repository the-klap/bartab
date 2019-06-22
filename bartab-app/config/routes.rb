Rails.application.routes.draw do
  devise_for :admins
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*path', to: 'pages#root', constraints: ->(request){ request.format.html? }
  resources :tab_histories
  resources :menus
  resources :admin_profiles
  resources :tabs
  resources :user_profiles
  root to: 'pages#root'
end