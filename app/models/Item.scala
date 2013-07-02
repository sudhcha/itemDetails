package models

case class Item(name: String, price:BigDecimal, quantity:Int)

object Item {
  
  def all(): List[Item]={
    var r = new scala.util.Random
    (1 to 20).map{ i => Item("Item"+i, r.nextInt(1000), r.nextInt(40))}.toList
  }
  
}