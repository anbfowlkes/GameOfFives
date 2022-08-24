Rails.application.routes.draw do
  
  get '/players', to: 'players#index'

  get '/tabletop', to: 'tabletops#show'





end
