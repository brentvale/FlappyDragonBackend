Rails.application.routes.draw do  
  root to: "static_pages#home"
  namespace :api do 
    resources :scores, only: [:index, :create]
  end
end
