package models

case class Item(name: String, price:BigDecimal, quantity:Int)

object Item {
  
  def all(): List[Item]={
    (1 to 20).map{ i => Item("Item"+i, i*100, i+20)}.toList
  }
  
}