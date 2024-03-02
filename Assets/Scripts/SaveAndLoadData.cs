using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using UnityEngine;

public class SaveAndLoadData : MonoBehaviour
{
    public static SaveAndLoadData instance;

    void Awake()
    {
        instance = this;
    }
    public void SaveData(ScoreStore scoreStore, string level)
    {
        string json = JsonUtility.ToJson(scoreStore);
        File.WriteAllText(Application.persistentDataPath + "/DataSave/PlayerDataLevel" + level + ".json", json);
    }
    public ScoreStore LoadData(string level)
    {
        ScoreStore scoreStore = new();
        scoreStore = JsonUtility.FromJson<ScoreStore>(File.ReadAllText(Application.persistentDataPath + "/DataSave/PlayerDataLevel" + level + ".json"));
        return scoreStore;
    }
    public string[] LoadDialogue(string level, int type)
    {
        try
        {
            DialogueList dialogueList = JsonUtility.FromJson<DialogueList>(File.ReadAllText("C:/Users/Asus/LiteratureProject/Assets" + "/DataSave/DialogueList.json"));
            for (int i = 0; i < dialogueList.dialogues.Count; i++)
            {
                if (dialogueList.dialogues[i].type == type && dialogueList.dialogues[i].level == level) {
                    return dialogueList.dialogues[i].dialogue;
                }
            }
        }
        catch (Exception e)
        {
            Debug.Log(e);
        }
        return new string[] {};
    }

    public QuestionStore[] LoadQuestion(string level, int type)
    {
        try
        {
            DialogueList dialogueList = JsonUtility.FromJson<DialogueList>(File.ReadAllText("C:/Users/Asus/LiteratureProject/Assets" + "/DataSave/DialogueList.json"));
            for (int i = 0; i < dialogueList.dialogues.Count; i++)
            {
                if (dialogueList.dialogues[i].type == type && dialogueList.dialogues[i].level == level) {
                    return dialogueList.dialogues[i].questions;
                }
            }
        }
        catch (Exception e)
        {
            Debug.Log(e);
        }
        return new QuestionStore[] {};
    }
}