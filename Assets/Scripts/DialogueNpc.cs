using System.Collections;
using System.Collections.Generic;
using System.Text;
using TMPro;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
public class DialogueNpc : MonoBehaviour
{

    public GameObject dialoguePanel;
    public TextMeshProUGUI dialogueText;

    public GameObject contBtn;
    public string[] dialogue;
    private int index;
    public float wordSpeed;
    public bool playerIsClose;
    public TextMeshProUGUI avatarName;
    public Image avatarImage;

    // Start is called before the first frame update
    void Start()
    {
        dialogueText.text = "";
        avatarName.text = "Tourist";
        string level = PlayerPrefs.GetString("level");
        int type = PlayerPrefs.GetInt("type");
        dialogue = SaveAndLoadData.instance.LoadDialogue(level, type);
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space) && playerIsClose)
        {
            if (dialoguePanel.activeInHierarchy)
            {
                zeroText();
            }
            else
            {
                dialoguePanel.SetActive(true);
                StartCoroutine(Typing());
            }
        }
        if (dialogue.Length != 0 && dialogueText.text == dialogue[index])
        {
            contBtn.SetActive(true);
        }
    }

    public void zeroText()
    {
        dialogueText.text = "";
        index = 0;
        dialoguePanel.SetActive(false);
    }

    IEnumerator Typing()
    {
        foreach (char letter in dialogue[index].ToCharArray())
        {
            byte[] bytes = Encoding.UTF8.GetBytes(new char[] { letter });
            string utf8String = Encoding.UTF8.GetString(bytes);
            dialogueText.text += utf8String;
            yield return new WaitForSeconds(wordSpeed);
        }
    }

    public void NextLine()
    {

        contBtn.SetActive(false);

        if (index < dialogue.Length - 1)
        {
            index++;
            dialogueText.text = "";
            StartCoroutine(Typing());
        }
        else
        {
            zeroText();
            SceneManager.LoadScene("MiniGame1", LoadSceneMode.Single);
        }
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.CompareTag("Player"))
        {
            playerIsClose = true;
        }
    }

    private void OnTriggerExit2D(Collider2D other)
    {
        if (other.CompareTag("Player"))
        {
            playerIsClose = false;
            zeroText();
        }
    }
}
