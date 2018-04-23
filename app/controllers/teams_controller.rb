
class TeamsController < ApplicationController
  def index
    response = HTTParty.get('https://millennial-app.herokuapp.com/v1/tournaments/get_full_tournament?api_key=gDhALqEI62hNcM9Z1zyvYJ9ArBCz4PjbSfjhjXVM9o&id=15')

    @teams = response["tournament"]["teams"]
  end
end
