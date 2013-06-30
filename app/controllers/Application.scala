package controllers

import play.api._
import play.api.mvc._
import play.api.libs.json._
import models._

object Application extends Controller {
  
  def index = Action {
    Ok(views.html.index("Item Details"))
  }
  
  def assortment = Action {
	  Ok(Json.toJson(Item.all().map { i=> toJsonObj(i.quantity, i)}))	  
  }
  
  def price = Action {
	  Ok(Json.toJson(Item.all().map { i=> toJsonObj(i.price, i)}))
  }
  
  def toJsonObj(value:Any, item:Item):JsObject = Json.obj("name" ->item.name,
	        "value" -> value.toString)
  
}