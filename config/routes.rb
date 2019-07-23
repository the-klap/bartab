Rails.application.routes.draw do
  resources :tab_histories
  resources :menus
  resources :admin_profiles
  resources :tabs
  resources :user_profiles
  get 'admin_open_tabs'=>'tabs#admin_open_tabs'
  get 'admin_closed_tabs'=>'tabs#admin_closed_tabs'
  get 'user_open_tabs'=>'tabs#user_open_tabs'
  get 'user_closed_tabs'=>'tabs#user_closed_tabs'
  devise_for :admins
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  root to: 'pages#index'
end