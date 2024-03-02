using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Linq;
using TMPro;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    public QuestionStore[] questions;
    private static List<QuestionStore> unansweredQuestions; 
    private QuestionStore currentQuestion;
    [SerializeField]
    private TextMeshProUGUI factText;
    [SerializeField]
    private TextMeshProUGUI trueAnswerText;
    [SerializeField]
    private TextMeshProUGUI falseAnswerText;
    [SerializeField]
    private Animator animator;
    [SerializeField]
    private float timeBetweenQuestion = 1f;
    void Start() {
        string level = PlayerPrefs.GetString("level");
        int type = PlayerPrefs.GetInt("type");
        questions = SaveAndLoadData.instance.LoadQuestion(level, type);
        if (unansweredQuestions == null || unansweredQuestions.Count == 0) {
            unansweredQuestions = questions.ToList<QuestionStore>();
        }

        SetCurrentQuestion();
    }

    void SetCurrentQuestion() {
        int randomQuestionIndex = Random.Range(0, unansweredQuestions.Count);
        currentQuestion = unansweredQuestions[randomQuestionIndex];

        factText.text = currentQuestion.fact;

        if(currentQuestion.isTrue) {
            trueAnswerText.text = "Đúng";
            falseAnswerText.text = "Sai";
        } else {
            trueAnswerText.text = "Sai";
            falseAnswerText.text = "Đúng";
        }
    }

    IEnumerator TransitionToNextQuestion() {
        unansweredQuestions.Remove(currentQuestion);
        yield return new WaitForSeconds(timeBetweenQuestion);

        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    }
    public void UserSelectTrue() {
        animator.SetTrigger("True");
        if(currentQuestion.isTrue) {
            Debug.Log("CORRECT!");
        } else {
            // save score
            SceneManager.LoadScene("MainMenu",LoadSceneMode.Single);
            Debug.Log("WRONG!");
        }

        StartCoroutine(TransitionToNextQuestion());
    }
    public void UserSelectFalse() {
        animator.SetTrigger("False");
        if(!currentQuestion.isTrue) {
            Debug.Log("CORRECT!");
        } else {
            // save score
            SceneManager.LoadScene("MainMenu",LoadSceneMode.Single);
            Debug.Log("WRONG!");
        }

        StartCoroutine(TransitionToNextQuestion());
    }
}
