using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MainMenu : MonoBehaviour
{
    public AudioSource btnPlay;
    public AudioSource btnSetting;
    public AudioSource btnExit;
    public AudioSource backgroundSound;

    void Start() {
        backgroundSound.Play();
    }
    public void PlayGame() {
        
    }

    public void QuitGame() {
        Application.Quit();
    }

    public void SettingGame() {
        
    }

    public void ButtonSettingClick() {
        btnSetting.Play();
    }
    public void ButtonExitClick() {
        btnExit.Play();
    }
    public void ButtonPlayClick() {
        btnPlay.Play();
    }
}
