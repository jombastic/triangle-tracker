import { Triangle } from './triangle.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();

    var sideA = parseInt($("#side-a").val());
    var sideB = parseInt($("#side-b").val());
    var sideC = parseInt($("#side-c").val());

    if (sideA && sideB && sideC) {
      var triangle = new Triangle(sideA, sideB, sideC);
      var triangleType = triangle.checkType();

      $(".triangle-type").text(triangleType);
    } else {
      $(".triangle-type").text("n cicka");
    }

    $("#result").show();
  });
});
