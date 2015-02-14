using UnityEngine; using System.Collections;

public class Example : MonoBehaviour { private float x; private Vector3 ls;
	
	void Start() {
		x = transform.localScale.x+5;
		ls = transform.localScale;
	}
	
	void Update () {
		//Get the position of our transform on screen space
		Vector3 pos = Camera.main.WorldToScreenPoint(transform.position);
		//Get the direction of the mouse from the player
		Vector3 dir = Input.mousePosition - pos;
		//Get the angle at which the mouse it relative to the player
		float angle = Mathf.Atan2(dir.x, dir.y) * Mathf.Rad2Deg;
		
		//Set the rotation to the angle of the mouse position relative to the player
		transform.rotation = Quaternion.Euler(90f, 90f, angle);
		}
	}

