function OnGUI () {
  if (GUI.Button (new Rect (35,20,75,50), "Restart")) {
    Application.LoadLevel(Application.loadedLevel);
  }
}

function Update () {
  if (Input.GetKey ("r")) {
    Application.LoadLevel(Application.loadedLevel);
  }

  if (Input.GetButtonDown ("Restart")) {
    Application.LoadLevel(Application.loadedLevel);
  }
 }