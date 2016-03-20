Rails.application.routes.draw do
  namespace :api do 
    resources :scores, only: [:index, :create]
  end
end
