import { Triangle } from './triangle.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();

    if ($("#triangle")[0].checkValidity() === false) {
      $("#triangle").addClass("was-validated");
    } else {
      var sideA = parseInt($("#side-a").val());
      var sideB = parseInt($("#side-b").val());
      var sideC = parseInt($("#side-c").val());
      var triangle = new Triangle(sideA, sideB, sideC);
      var triangleType = triangle.checkType();

      $(".triangle-type").text(triangleType);
      $("#result").show();
    }
  });
});
