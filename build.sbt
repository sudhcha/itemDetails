name := """itemDetails"""

version := "1.0"

scalaVersion := "2.10.1"

libraryDependencies ++= Seq(
  "org.webjars" %% "webjars-play" % "2.1.0-2",
  "org.webjars" % "angularjs" % "1.0.2",
  "org.webjars" % "bootstrap" % "2.3.2",
  "org.scalatest" %% "scalatest" % "1.9.1" % "test",
  "junit" % "junit" % "4.11" % "test",
  "org.webjars" % "d3js" % "3.1.5",
  "com.novocode" % "junit-interface" % "0.7" % "test->default"
)

testOptions += Tests.Argument(TestFrameworks.JUnit, "-v")
