class TabletopsController < ApplicationController


    def show
        render json: Tabletop.all
    end

end
