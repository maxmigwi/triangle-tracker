
function tracker() {
    var x = parseInt(document.getElementById("one").value);
    var y = parseInt(document.getElementById("two").value);
    var z = parseInt(document.getElementById("three").value);
    var triangles = [x, y, z];


    if (triangles[0] + triangles[1] <= triangles[2] || triangles[0] + triangles[2] <= triangles[1] || triangles[1] + triangles[2] <= triangles[0]) {
      
    } else if (triangles[0] === triangles[1] && triangles[1] === triangles[2] && triangles[0] === triangles[2]) {

    } else if (triangles[0] === triangles[1] || triangles[0] === triangles[2] || triangles[1] === triangles[2]) {
      document.getElementById("response").innerHTML = " Brilliant! That is an Isosceles triangle.";
    } else if (triangles[0] + triangles[1] > triangles[2] || triangles[1] + triangles[2] > triangles[0] || triangles[0] + triangles[2]  document.getElementById("response").
    } else {

    }
  }
