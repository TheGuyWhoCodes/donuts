 function Start () {
 
 }
     var shootForce: float;
     var bulletPrefab: Transform;
     var myMuzzle: Transform;
 
 function Update () {
     
     if(Input.GetButtonDown("Fire1")){
         var bullet = Instantiate(bulletPrefab,myMuzzle.transform.position,Quaternion.identity);
             bullet.rigidbody.AddForce(transform.forward * shootForce * Time.deltaTime);
     }    
 }