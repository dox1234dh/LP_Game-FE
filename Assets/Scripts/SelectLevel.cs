using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SelectLevel : MonoBehaviour
{
    public void CacheLevel(string level) {
        PlayerPrefs.SetString("level", level);
    }
}
