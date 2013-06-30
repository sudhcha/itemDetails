package controllers

import play.api._
import play.api.mvc._
import play.api.libs.json.Json
import models._

object Application extends Controller {
  
  def index = Action {
    Ok(views.html.index("Item Details"))
  }
  
  def assortment = Action {
	  Ok(Json.toJson(Item.all().map { i=>
	    Json.obj("name" ->i.name,
	        "value" -> i.quantity)
	  }))	  
  }
  
  def price = Action {
	  Ok(Json.toJson(Item.all().map { i=>
	    Json.obj("name" ->i.name,
	        "value" -> i.price)
	  }))
}
  
}