using System;
using TMPro;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using UnityEngine;

public class DetailLevel : MonoBehaviour
{
    public static DetailLevel instance;
    public TextMeshProUGUI scenceWriterText;
    public TextMeshProUGUI authorText;
    public TextMeshProUGUI workWriterText;
    public Image progressBarComplete;
    // Start is called before the first frame update
    private void Awake()
    {
        instance = this;
    }
    void Start()
    {
        try
        {
            string level = PlayerPrefs.GetString("level");
            ScoreStore scoreStoreLoad = SaveAndLoadData.instance.LoadData(level);
            scenceWriterText.text = scoreStoreLoad.scenceWriterText;
            authorText.text = scoreStoreLoad.authorText;
            workWriterText.text = scoreStoreLoad.workWriterText;
        }
        catch (Exception e)
        {
            Debug.Log(e);
            scenceWriterText.text = "0%";
            authorText.text = "0%";
            workWriterText.text = "0%";
        }
    }
    public void LoadPrologueStage(int type) {
        PlayerPrefs.SetInt("type", type);
        SceneManager.LoadScene("PrologueStage", LoadSceneMode.Single);
    }
}
