
function tracker() {
    var x = parseInt(document.getElementById("one").value);
    var y = parseInt(document.getElementById("two").value);
    var z = parseInt(document.getElementById("three").value);
    var triangles = [x, y, z];


    if (triangles[0] + triangles[1] <= triangles[2] || triangles[0] + triangles[2] <= triangles[1] || triangles[1] + triangles[2] <= triangles[0]) {
      document.getElementById("response").innerHTML = " I'm afraid to tell you this, but you CANNOT form a triangle using those values";
    } else if (triangles[0] === triangles[1] && triangles[1] === triangles[2] && triangles[0] === triangles[2]) {

      document.getElementById("response").innerHTML = " No doubt.That is an Equilateral triangle.";

    } else if (triangles[0] === triangles[1] || triangles[0] === triangles[2] || triangles[1] === triangles[2]) {
      document.getElementById("response").innerHTML = " Brilliant! That is an Isosceles triangle.";
    } else if (triangles[0] + triangles[1] > triangles[2] || triangles[1] + triangles[2] > triangles[0] || triangles[0] + triangles[2] > triangles[1]) {
      document.getElementById("response").innerHTML = " Wow! That is a Scalene triangle.";
    } else {
      response.innerHTML = ' Oops! Am sorry that is NOT a triangle!';
    }
  }
