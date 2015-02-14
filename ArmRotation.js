#pragma strict
 
var rotationOffset : int = 0;
 
function Update ()
{
	
    var object_pos : Vector3 = transform.position;
   
    var mouse_pos : Vector3 = Input.mousePosition;
   
    object_pos = Camera.main.WorldToScreenPoint(transform.position);
   
    mouse_pos.x = mouse_pos.x - object_pos.x;
    mouse_pos.y = mouse_pos.y - object_pos.y;
   
    var rotZ = Mathf.Atan2(mouse_pos.y, mouse_pos.x) *    Mathf.Rad2Deg;
   
    transform.rotation = Quaternion.Euler(Vector3(00, 0, rotZ + rotationOffset));
}