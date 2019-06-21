Rails.application.routes.draw do
  resources :admin_profiles
  resources :tabs
  resources :user_profiles
  devise_for :admins
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*path', to: 'pages#root', constraints: ->(request){ request.format.html? }
  root to: 'pages#root'
end